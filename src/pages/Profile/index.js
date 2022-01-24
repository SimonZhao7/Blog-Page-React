import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context";
import { UserWrapper, UserContent } from './Profile.styles';
import { Spinner } from '../../components/Spinner/Spinner.styles';
import UserDetail from '../../components/UserDetail';


const Profile = () => {
    const { user, token } = useAppContext()
    const [viewedUser, setViewedUser] = useState()
    const [loading, setLoading] = useState(true)
    const usernameParam = useParams('username').username

    useEffect(() => {
        const fetchUserDetails = async () => {
            setLoading(true)
            const response = await fetch(`http://localhost:8000/api/CustomUserAPI/username=${usernameParam}/`, {
                headers: {Authorization: `Token ${token}`}
            })
            const data = await response.json()
            setViewedUser(data)
            setLoading(false)
        }
        fetchUserDetails()
    }, [token, usernameParam])

    if (loading) {
        return(
            <UserWrapper>
                <Spinner></Spinner>
            </UserWrapper>
        )
    }

    return (
        <UserWrapper>
            {!user && 
                <Navigate to='/login'/>
            }
            <UserContent>
                <img src={`http://localhost:8000${viewedUser.profile_picture}`} alt='profile-pic' />
                <UserDetail {...viewedUser} />
            </UserContent>
        </UserWrapper>
    )
}

export default Profile