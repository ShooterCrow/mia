// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper function to get initial state from localStorage
const getInitialState = () => {
    try {
        const token = localStorage.getItem('auth_token');
        const userId = localStorage.getItem('user_id');
        const userData = localStorage.getItem('user_data');
        
        return {
            user_id: userId || null,
            auth_token: token || null,
            user: userData ? JSON.parse(userData) : null,
            isAuthenticated: !!(token && userId),
        };
    } catch (error) {
        // If there's an error parsing localStorage, return default state
        return {
            user_id: null,
            auth_token: null,
            user: null,
            isAuthenticated: false,
        };
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        setCredentials: (state, action) => {
            const { user_id, auth_token, user } = action.payload?.data;
            
            // Update state
            state.user_id = user_id;
            state.auth_token = auth_token;
            state.user = user || null;
            state.isAuthenticated = !!(user_id && auth_token);
            
            // Persist to localStorage
            if (auth_token) {
                localStorage.setItem('auth_token', auth_token);
            }
            if (user_id) {
                localStorage.setItem('user_id', user_id);
            }
            if (user) {
                localStorage.setItem('user_data', JSON.stringify(user));
            }
            
            console.log('Credentials set:', { user_id, auth_token: !!auth_token });
        },
        
        setUserData: (state, action) => {
            // For updating user data after profile updates
            state.user = action.payload;
            localStorage.setItem('user_data', JSON.stringify(action.payload));
        },
        
        clearCredentials: (state) => {
            // Clear state
            state.user_id = null;
            state.auth_token = null;
            state.user = null;
            state.isAuthenticated = false;
            
            // Clear localStorage
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_data');
            
            console.log('Credentials cleared');
        },
        
        updateAuthToken: (state, action) => {
            // For cases where you might need to update just the token
            const { auth_token } = action.payload;
            state.auth_token = auth_token;
            
            if (auth_token) {
                localStorage.setItem('auth_token', auth_token);
            }
        }
    },
});

export const { 
    setCredentials, 
    setUserData, 
    clearCredentials, 
    updateAuthToken 
} = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentUserId = (state) => state.auth.user_id;
export const selectCurrentToken = (state) => state.auth.auth_token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// Combined selector for checking if user is authenticated and verified
export const selectIsAuthenticatedAndVerified = (state) => {
    return state.auth.isAuthenticated && state.auth.user?.is_verified;
};

export default authSlice.reducer;

















// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user_id: null,
//         auth_token: null,
//     },
//     reducers: {
//         setCredentials: (state, action) => {
//             const {user_id, auth_token} = action.payload?.data;
//             console.log(auth_token)
//             state.user_id = user_id;
//             state.auth_token = auth_token;
//         },
//         clearCredentials: (state) => {
//             state.user_id = null;
//             state.auth_token = null;
//         },
//     },
// })

// export const { setCredentials, clearCredentials } = authSlice.actions;
// export const selectCurrentUser = (state) => state.auth.user_id;
// export const selectCurrentToken = (state) => state.auth.auth_token;
// export default authSlice.reducer;