import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useGetUserProfileQuery } from "../features/user/userApiSlice";
import { User } from "lucide-react";

const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const { data, isSuccess } = useGetUserProfileQuery();
  const userData = data?.data;

  let isLoggedIn = false;
  let username = "";
  let roles = [];
  let isActive;
  let userId = "";
  let canCompleteOffers;
  let firstName
  let lastName

  if (typeof token === "string" && isSuccess) {
    try {
      const decoded = jwtDecode(token);
      const { UserInfo } = decoded;

      isLoggedIn = true;
      username = UserInfo.userName;
      isActive = UserInfo.isActive;
      userId = UserInfo.id;
      canCompleteOffers = UserInfo.canCompleteOffers;
      firstName = userData?.firstName
      lastName = userData?.lastName

      // Convert roles object to array of role names
      roles = Object.keys(UserInfo.roles || {}).filter(
        (role) => !!UserInfo.roles[role]
      );
    } catch (error) {
      import.meta.env.VITE_ENV === "dev_env" &&
        console.error("Error decoding token:", error);
      // Token is invalid, so user is not logged in
      // isLoggedIn = false;
    }
  }

  return {
    isLoggedIn,
    username,
    userId,
    roles,
    canCompleteOffers,
    isActive,
    // Include the full decoded token info and user object for advanced use cases
    user: userData,
    firstName,
    lastName,
    token,
    isAdmin: roles.includes("admin"),
  };
};

export default useAuth;
