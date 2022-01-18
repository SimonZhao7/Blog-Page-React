import React, { useState, useContext } from 'react';


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const openSidebar = () => {
        setSidebarIsOpen(true)
    }

    const closeSidebar = () => {
        setSidebarIsOpen(false)
    }

    const handleSetUser = (token) => {
        localStorage.setItem('user', JSON.stringify(token))
        setUser(token)
    }

    return (
        <AppContext.Provider
            value={{
                sidebarIsOpen,
                user,
                openSidebar,
                closeSidebar,
                handleSetUser,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}