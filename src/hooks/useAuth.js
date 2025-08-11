import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken, // You may not even need this anymore
} from "../features/auth/authSlice";
import { useGetUserProfileQuery } from "../features/user/userApiSlice";

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);

  const {
    data: profile,
    isLoading,
    isSuccess,
    isError,
  } = useGetUserProfileQuery(); // Assume this uses session/cookie auth

  let isLoggedIn = !!profile;
  let username = profile?.username || "";
  let userId = profile?.id || "";
  let roles = profile?.roles || [];

  return {
    isLoggedIn,
    username,
    userId,
    roles,
    isLoading,
    isSuccess,
    isError,
    user: profile || user, // fallback to Redux user if needed
    token: null,
    isAdmin: roles.includes("admin"),
  };
};

// You can also keep the default export for backward compatibility
export default useAuth;