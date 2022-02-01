import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ThinButton } from '../../GlobalStyle';
import { UserInfo, UserNumbers } from './UserDetail.styles';
import { useAppContext } from "../../context";


const UserDetail = ({ id, username }) => {
    const { user, token } = useAppContext()
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [followStatus, setFollowStatus] = useState('Follow')

    const handleFollow = async () => {
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
        const fetchData = () => {
            fetch(`http://localhost:8000/api/UserFollowingAPI/following_id=${id}/`, {
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
    
            fetch(`http://localhost:8000/api/UserFollowingAPI/user_id=${id}/`, {
                headers: {Authorization: `Token ${token}`}
            })
                .then(response => response.json())
                .then(data => setFollowing(data))
                .catch((error) => {
                    console.error(error);
                })
        }
        fetchData()
    }, [id, token, user.id])

    return (
        <UserInfo>
            <div>
                <h2>{username}</h2>
            </div>
            <div>
                <UserNumbers>
                    <h4>0</h4>
                    <p>Posts</p>
                </UserNumbers>
                <UserNumbers>
                    <h4>{followers.length}</h4>
                    <p>Followers</p>
                </UserNumbers>
                <UserNumbers>
                    <h4>{following.length}</h4>
                    <p>Following</p>
                </UserNumbers>
            </div>
            <div>
                {user.username === username
                    ? <ThinButton width='90%'><Link to='/settings'>Settings</Link></ThinButton>
                    : <ThinButton width='90%' 
                        onClick={followStatus === 'Following' ? handleUnfollow : handleFollow}>{followStatus}</ThinButton>
                }
            </div>
        </UserInfo>
    )
}

export default UserDetail