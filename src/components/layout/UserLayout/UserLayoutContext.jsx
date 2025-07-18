import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

const UserLayoutContext = createContext();

export const UserLayoutProvider = ({ children }) => {
    const [bottomBarExpanded, setBottomBarExpanded] = useState(false);
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const prevIsMobile = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const mobile = width < 768;
            const tablet = width >= 768 && width < 1024;
            const desktop = width >= 1024;

            setIsMobile(mobile);
            setIsTablet(tablet);

            // Auto-collapse bottom bar only when transitioning to mobile
            if (mobile && !prevIsMobile.current && bottomBarExpanded) {
                setBottomBarExpanded(false);
            }

            // Set default sidebar state based on screen size
            if (tablet) {
                setSidebarExpanded(false); // Collapsed on tablet
            } else if (desktop) {
                setSidebarExpanded(true); // Expanded on desktop
            }

            // Save current mobile state for next comparison
            prevIsMobile.current = mobile;
        };

        // Initial layout setup
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [bottomBarExpanded]);

    // Actions
    const toggleBottomBar = () => setBottomBarExpanded(prev => !prev);
    const closeBottomBar = () => setBottomBarExpanded(false);
    const toggleSidebar = () => setSidebarExpanded(prev => !prev);
    const closeSidebar = () => setSidebarExpanded(false);
    const expandSidebar = () => setSidebarExpanded(true);

    return (
        <UserLayoutContext.Provider value={{
            bottomBarExpanded,
            toggleBottomBar,
            closeBottomBar,
            sidebarExpanded,
            toggleSidebar,
            closeSidebar,
            expandSidebar,
            isMobile,
            isTablet
        }}>
            {children}
        </UserLayoutContext.Provider>
    );
};

export const useUserLayout = () => {
    const context = useContext(UserLayoutContext);
    if (!context) {
        throw new Error('useUserLayout must be used within an UserLayoutProvider');
    }
    return context;
};
