import React from "react";
import { Link } from 'react-router-dom';
import { useProfileContext } from "../../context";
// Styles
import { ThinButton } from '../../GlobalStyle';
import { UserInfo, UserNumbers } from './UserDetail.styles';
// Components
import FollowButton from "../FollowButton";


const UserDetail = () => {
    const { user, viewedUser: {id, username}, followers, following, openFollowersModal, openFollowingModal } = useProfileContext()

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
                <UserNumbers onClick={openFollowersModal}>
                    <h4>{followers.length}</h4>
                    <p>Followers</p>
                </UserNumbers>
                <UserNumbers onClick={openFollowingModal}>
                    <h4>{following.length}</h4>
                    <p>Following</p>
                </UserNumbers>
            </div>
            <div>
                {user.username === username
                    ? <ThinButton width='90%'><Link to='/settings'>Settings</Link></ThinButton>
                    : <FollowButton id={id} />
                }
            </div>
        </UserInfo>
    )
}

export default UserDetail