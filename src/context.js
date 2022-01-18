import React, { useState, useContext } from 'react';


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const openSidebar = () => {
        setSidebarIsOpen(true)
    }

    const closeSidebar = () => {
        setSidebarIsOpen(false)
    }

    return (
        <AppContext.Provider
            value={{
                sidebarIsOpen,
                openSidebar,
                closeSidebar,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}