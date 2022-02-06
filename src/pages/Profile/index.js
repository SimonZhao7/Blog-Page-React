import React from "react";
import { Navigate } from "react-router-dom";
import { useProfileContext } from "../../context";
// Styles
import { ContentWrapper } from "../../GlobalStyle";
import { UserContent } from './Profile.styles';
// Components
import UserDetail from '../../components/UserDetail';
import Spinner from "../../components/Spinner";
import ListModal from "../../components/ListModal";


const Profile = () => {
    const { user, viewedUser, loading, isFollowingModalOpen, isFollowersModalOpen } = useProfileContext()

    return (
        <>
        <ContentWrapper>
            {!user && <Navigate to='/login' />}
            {loading 
            ? <Spinner />
            : 
            <UserContent>
                <img src={`http://localhost:8000${viewedUser.profile_picture}`} alt='profile-pic' />
                <UserDetail />
            </UserContent>
            }
        </ContentWrapper>
        {isFollowersModalOpen && <ListModal type='Followers' />}
        {isFollowingModalOpen && <ListModal type='Following' />}
        </>
    )
}

export default Profile