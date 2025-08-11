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
import TrendingProducts from "./pages/TrendingProducts";
import DiscountPage from "./pages/DiscountPage";
import ProductUpload from "./pages/ProductUpload";
import SellerOnboarding from "./features/becomeASeller/SellerOnboarding";
import SellerDashboard from "./features/seller/SellerDash1";
import { SellerLayoutProvider } from "./components/layout/SellerLayout.jsx/SellerLayoutContext";
import SellerLayout from "./components/layout/SellerLayout.jsx/SellerLayout";
import SellerOnboardingLanding from "./features/becomeASeller/SellerOnboarding";
import { ProtectedRoutes } from "./features/auth/ProtectedRoutes";

// Admin imports
import AdminLayout from "./components/layout/AdminLayout/AdminLayout";
import { AdminLayoutProvider } from "./components/layout/AdminLayout/AdminLayoutContext";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import AdminUsers from "./features/admin/pages/AdminUsers";
import AdminProducts from "./features/admin/pages/AdminProducts";
import AdminOrders from "./features/admin/pages/AdminOrders";
import AdminAnalytics from "./features/admin/pages/AdminAnalytics";
import ProtectedAdminRoute from "./components/auth/ProtectedAdminRoute";

function App() {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <Routes>
        {/* Main Application Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" >
            <Route index element={<AllProducts />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryPage />} />
            <Route path=":category" element={<CategoryPage />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="support" element={<Support />} />
          <Route path="trending-products" element={<TrendingProducts />} />
          <Route path="discount-page" element={<DiscountPage />} />
          
          {/* User Dashboard */}
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" >
              {/* //path="profile" */}
              <Route index element={<UserProfile />} />
              <Route path="orders" element={<Orders />} />
              <Route path="seller" element={<SellerOnboarding />} />
              <Route path="messages" element={<Messages />} />
              <Route path="product-upload" element={<ProductUpload />} />
            </Route>
            <Route path="seller-dashboard" element={
              <SellerLayoutProvider>
                <SellerLayout />
              </SellerLayoutProvider>
            }>
              <Route path="profile" element={<SellerDashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="messages" element={<Messages />} />
              <Route path="product-upload" element={<ProductUpload />} />
            </Route>
          </Route>
        </Route>

        {/* Admin Dashboard Routes - Separate from main layout */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayoutProvider>
                <AdminLayout />
              </AdminLayoutProvider>
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;