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
    const usernameParam = useParams('username').username

    useEffect(() => {
        const fetchUserDetails = async () => {
            const response = await fetch(`http://localhost:8000/api/CustomUserAPI/username=${usernameParam}/`, {
                headers: {Authorization: `Token ${token}`}
            })
            const data = await response.json()
            if (isMounted) {
                setViewedUser(data)
                setLoading(false)
            }
        }
        let isMounted = true
        fetchUserDetails()
        return () => {isMounted = false}
    }, [token, usernameParam])

    if (!user) return (<Navigate to='/login' />)
    
    if (loading) {
        return (
            <ContentWrapper>
                <Spinner></Spinner>
            </ContentWrapper>
        )
    }

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