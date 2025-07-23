import { ThemeProvider } from "./components/ThemeProvider";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SignUp from "./features/auth/SignUp";
import Login from "./features/auth/Login";
import EmailVerification from "./features/auth/EmailVerification";
import AllProducts from "./pages/AllProducts";
import UserProfile from "./features/user/UserProfile";
import CategoryPage from "./pages/CategoryPage";
import { UserLayoutProvider } from "./components/layout/UserLayout/UserLayoutContext";
import UserLayout from "./components/layout/UserLayout/UserLayout";
import ProductDetails from "./pages/detailPages/project-details/ProductDetails";
import Support from "./pages/Support";
import Orders from "./features/orders/Orders";
import Messages from "./features/messages/Messages";
import ProductUpload from "./pages/ProductUpload";
import Seller from "./features/user/Seller";

function App() {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="seller" element={<Seller />} />
          <Route path="products" >
            <Route index element={<AllProducts />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="categories" >
            <Route index element={<CategoryPage />} />
            <Route path=":category" element={<CategoryPage />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="support" element={<Support />} />
          <Route path="dashboard" element={
            <UserLayoutProvider>
              <UserLayout />
            </UserLayoutProvider>
          }>
            <Route path="profile" element={<UserProfile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages />} />
            <Route path="product-upload" element={<ProductUpload />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;