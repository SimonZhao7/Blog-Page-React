import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context";
import { ContentWrapper, Spinner } from "../../GlobalStyle";
import { UserContent } from './Profile.styles';
import UserDetail from '../../components/UserDetail';


const Profile = () => {
    const { user, token } = useAppContext()
    const [viewedUser, setViewedUser] = useState()
    const [loading, setLoading] = useState(true)
    const usernameParam = useParams('username').username

    const fetchUserDetails = async () => {
        setLoading(true)
        const response = await fetch(`http://localhost:8000/api/CustomUserAPI/username=${usernameParam}/`, {
            headers: {Authorization: `Token ${token}`}
        })
        const data = await response.json()
        setViewedUser(data)
        setLoading(false)
    }

    if (loading) {
        return(
            <ContentWrapper>
                {!user && <Navigate to='/login' />}
                <Spinner></Spinner>
            </ContentWrapper>
        )
    }

    fetchUserDetails()
    return (
        <ContentWrapper>
            <UserContent>
                <img src={`http://localhost:8000${viewedUser.profile_picture}`} alt='profile-pic' />
                <UserDetail {...viewedUser} />
            </UserContent>
        </ContentWrapper>
    )
}

export default Profile