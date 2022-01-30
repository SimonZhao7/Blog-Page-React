import React, { useState, useContext } from 'react';


export const AppContext = React.createContext()

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

export const useAppContext = () => {
    return useContext(AppContext)
}