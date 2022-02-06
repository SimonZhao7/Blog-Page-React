import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";


export const AppContext = React.createContext()
export const ProfileContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))

    const handleFetchUser = async (token) => {
        const response = await fetch(`http://localhost:8000/api/CustomUserAPI/token=${token}/`, {
            headers: {Authorization: `Token ${token}`}
        })
        const data = await response.json()
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data)
        closeSidebar()
    }

    const openSidebar = () => {
        setSidebarIsOpen(true)
    }

    const closeSidebar = () => {
        setSidebarIsOpen(false)
    }

    const handleSetUser = (token) => {
        localStorage.setItem('token', JSON.stringify(token))
        setToken(token)
        handleFetchUser(token)
    }

    const removeUser = () => {
        localStorage.clear()
        setUser(null)
        setToken(null)
        closeSidebar()
    }

    return (
        <AppContext.Provider
            value={{
                sidebarIsOpen,
                user,
                token,
                openSidebar,
                closeSidebar,
                handleSetUser,
                removeUser,
                handleFetchUser,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const ProfileProvider = ({ children }) => {
    // User data
    const { user, token } = useAppContext()
    const [userFollowing, setUserFollowing] = useState([])
    const [loading, setLoading] = useState(true)
    // Modal States
    const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false)
    const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false)
    // The viewed user's data
    const [viewedUser, setViewedUser] = useState()
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    // Url Params
    const usernameParam = useParams('username').username


    // Following Functions
    const handleFollow = async (id) => {
        const body = new FormData()
        body.append('user', user.id)
        body.append('following', id)
        try {
            // Create new UserFollowing data on db
            fetch(`http://localhost:8000/api/UserFollowingAPI/`, {
                method: 'POST',
                headers: {
                    Authorization: `Token ${token}`
                },
                body: body
            })
                .then(response => response.json())
                .then(data => {
                    setUserFollowing([...userFollowing, data])
                    // Don't update state if following someone other than viewedUser
                    if (id === viewedUser.id) {
                        setFollowers([...followers, data])
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnfollow = (id) => {
        // Get followers by user id
        fetch(`http://localhost:8000/api/UserFollowingAPI/following_id=${id}/`, {
            headers: {Authorization: `Token ${token}`}
        })
            .then(response => response.json())
            .then(data => {
                const followToBeDeleted = data.filter(item => item.user === user.id)
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
            })
        // update followers state ONLY if you unfollowed for viewedUser
        setUserFollowing(userFollowing.filter(item => item.following !== id))
        if (id ===  viewedUser.id) {
            setFollowers(followers.filter(item => item.user !== user.id))
        }   
    }

    // Modal Showing Handlers
    const openFollowersModal = () => {
        setIsFollowersModalOpen(true)
    }

    const closeFollowersModal = () => {
        setIsFollowersModalOpen(false)
    }

    const openFollowingModal = () => {
        setIsFollowingModalOpen(true)
    }

    const closeFollowingModal = () => {
        setIsFollowingModalOpen(false)
    }

    useEffect(() => { 
        const fetchFollowingData = async (setFunction, id) => {
            fetch(`http://localhost:8000/api/UserFollowingAPI/user_id=${id}/`, {
                headers: {Authorization: `Token ${token}`}
            })
                .then(response => response.json())
                .then(data => setFunction(data))
                .catch((error) => {
                    console.error(error);
                })
        }
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
                })
                .catch((error) => {
                    console.error(error);
                })
    
            fetchFollowingData(setFollowing, data.id)
            fetchFollowingData(setUserFollowing, user.id)
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
        <ProfileContext.Provider
            value={{
                user,
                token,
                viewedUser, 
                loading,
                followers,
                isFollowingModalOpen,
                isFollowersModalOpen,
                userFollowing,
                following,
                handleFollow,
                handleUnfollow,
                openFollowersModal,
                openFollowingModal,
                closeFollowersModal,
                closeFollowingModal,
            }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export const useProfileContext = () => {
    return useContext(ProfileContext)
}