import { useEffect, useState } from 'react';

/**
 * Custom hook for persisting login state in localStorage
 * 
 * @param {string} key - The key to store the login persistence preference under in localStorage (e.g., 'rememberMe')
 * @param {boolean} defaultValue - The default login persistence state (typically false for security)
 * @returns {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} A tuple containing the current persistence state and a function to update it
 */
const usePersist = (key = 'persistLogin', defaultValue = true) => {
    // Initialize state from localStorage or use defaultValue if nothing is stored
    const [persist, setPersist] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            // Only return true if the stored value is explicitly "true"
            return storedValue === 'true' ? true : defaultValue;
        } catch {
            // In case of any error, default to not persisting login for security
            return defaultValue;
        }
    });

    // Sync the state to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem(key, String(persist));
        } catch (error) {
            import.meta.env.VITE_ENV === "dev_env" && console.error(`Error saving login persistence preference to localStorage: ${error}`);
        }
    }, [key, persist]);

    return [persist, setPersist];
};

export default usePersist;