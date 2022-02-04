import React from "react";
import { Link } from 'react-router-dom';
import { ThinButton } from '../../GlobalStyle';
import { UserInfo, UserNumbers } from './UserDetail.styles';
import { useAppContext } from "../../context";


const UserDetail = ({ viewedUser, followers, following, followStatus, handleFollow, handleUnfollow }) => {
    const { user } = useAppContext()
    const { id, username } = viewedUser
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
                        onClick={() => {followStatus === 'Following' ? handleUnfollow() : handleFollow(id)}}>{followStatus}</ThinButton>
                }
            </div>
        </UserInfo>
    )
}

export default UserDetail