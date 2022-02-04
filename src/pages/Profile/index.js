import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context";
import { ContentWrapper, Spinner } from "../../GlobalStyle";
import { UserContent } from './Profile.styles';
import UserDetail from '../../components/UserDetail';


const Profile = () => {
    const { user, token } = useAppContext()
    const [viewedUser, setViewedUser] = useState()
    const [loading, setLoading] = useState(true)
    // The viewed user's data
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [followStatus, setFollowStatus] = useState('Follow')
    // Url Params
    const usernameParam = useParams('username').username

    const handleFollow = async (id) => {
        const body = new FormData()
        body.append('user', user.id)
        body.append('following', id)
        try {
            fetch(`http://localhost:8000/api/UserFollowingAPI/`, {
                method: 'POST',
                headers: {
                    Authorization: `Token ${token}`
                },
                body: body
            })
                .then(response => response.json())
                .then(data => {
                    setFollowers([...followers, data])
                    setFollowStatus('Following')
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnfollow = () => {
        const followToBeDeleted = followers.filter(item => item.user === user.id)
        followToBeDeleted.forEach(follow => {
            try {
                fetch(`http://localhost:8000/api/UserFollowingAPI/${follow.id}/`, {
                    method: 'DELETE',
                    headers: {Authorization: `Token ${token}`}
                })
            } catch (error) {
                console.log(error)
            }
        })
        setFollowers(followers.filter(item => item.user !== user.id))
        setFollowStatus('Follow')
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/api/CustomUserAPI/username=${usernameParam}/`, {
                headers: {Authorization: `Token ${token}`}
            })
            const data = await response.json()

            fetch(`http://localhost:8000/api/UserFollowingAPI/following_id=${data.id}/`, {
                headers: {Authorization: `Token ${token}`}
            })
                .then(response => response.json())
                .then(data => {
                    setFollowers([...data])
                    setFollowStatus(data.filter(item => item.user === user.id).length > 0 ? 'Following': 'Follow')
                })
                .catch((error) => {
                    console.error(error);
                })
    
            fetch(`http://localhost:8000/api/UserFollowingAPI/user_id=${data.id}/`, {
                headers: {Authorization: `Token ${token}`}
            })
                .then(response => response.json())
                .then(data => setFollowing(data))
                .catch((error) => {
                    console.error(error);
                })
            if (isMounted) {
                setViewedUser(data)
                setLoading(false)
            }
            return () => {isMounted = false}
        }
        let isMounted = true
        fetchData()
    }, [token, user.id, usernameParam])

    return (
        <ContentWrapper>
            {!user && <Navigate to='/login' />}
            {loading 
            ? <Spinner></Spinner>
            : 
            <UserContent>
                <img src={`http://localhost:8000${viewedUser.profile_picture}`} alt='profile-pic' />
                <UserDetail 
                    viewedUser={viewedUser}
                    followers={followers} 
                    following={following} 
                    followStatus={followStatus} 
                    handleFollow={handleFollow} 
                    handleUnfollow={handleUnfollow}
                />
            </UserContent>
            }
        </ContentWrapper>
    )
}

export default Profile