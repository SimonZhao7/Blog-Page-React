import React, { useState, useEffect } from "react";
import { ThinButton } from '../../GlobalStyle';
import { UserInfo, UserNumbers } from './UserDetail.styles';
import { useAppContext } from "../../context";


const UserDetail = ({ id, username }) => {
    const { user, token } = useAppContext()
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() => {
        const getFollowers = async () => {
            const response = await fetch(`http://localhost:8000/api/UserFollowingAPI/following_id=${id}/`, {
                headers: {Authorization: `Token ${token}`}
            })
            const data = await response.json()
            setFollowers(data)
        }
        
        const getFollowing = async () => {
            const response = await fetch(`http://localhost:8000/api/UserFollowingAPI/user_id=${id}/`, {
                headers: {Authorization: `Token ${token}`}
            })
            const data = await response.json()
            setFollowing(data)
        }

        getFollowers()
        getFollowing()
    }, [id, token])

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
                {user.username === username &&
                    <ThinButton width='90%'>Settings</ThinButton>
                }
            </div>
        </UserInfo>
    )
}

export default UserDetail