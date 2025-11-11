import { ThemeProvider } from "./components/ThemeProvider";
import { Route, Routes, ScrollRestoration, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SignUp from "./features/auth/SignUp";
import Login from "./features/auth/Login";
import EmailVerification from "./features/auth/EmailVerification";
import AllProducts from "./pages/AllProducts";
import UserProfile from "./features/user/UserProfile";
import CategoryPage from "./pages/CategoryPage";
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
import { ProtectedRoutes } from "./features/auth/ProtectedRoutes";

// Admin imports
import AdminLayout from "./components/layout/AdminLayout/AdminLayout";
import { AdminLayoutProvider } from "./components/layout/AdminLayout/AdminLayoutContext";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import UserManagement from "./features/admin/pages/UserManagement";
import ProductManagement from "./features/admin/pages/ProductManagement";
import OrdersAndPayment from "./features/admin/pages/OrdersAndPayment";
import Transaction from "./features/admin/pages/Transaction";
import AnalyticAndReports from "./features/admin/pages/AnalyticAndReports";
import Communication from "./features/admin/pages/Communication";
import DisputeResolution from "./features/admin/pages/DisputeResolution";
import SellerManagement from "./features/admin/pages/SellerManagement";
import AdminProfile from "./features/admin/pages/AdminProfile";
import ProtectedAdminRoute from "./components/auth/ProtectedAdminRoute";
import PlatformSettings from "./features/admin/pages/PlatformSettings";
import PersistLogin from "./features/auth/PersistLogin";

function App() {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <Routes>
        {/* Wrap everything that requires token persistence */}
        <Route element={<PersistLogin />}>
          {/* Public routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="verify-email" element={<EmailVerification />} />
            <Route path="support" element={<Support />} />
            <Route path="trending-products" element={<TrendingProducts />} />
            <Route path="discount-page" element={<DiscountPage />} />

            {/* Products */}
            <Route path="products">
              <Route index element={<AllProducts />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>

            {/* Categories */}
            <Route path="categories">
              <Route index element={<CategoryPage />} />
              <Route path=":category" element={<CategoryPage />} />
            </Route>

            {/* User-protected routes */}
            <Route element={<ProtectedRoutes allowedRoles={["buyer", "seller"]} />}>
              <Route path="dashboard">
                <Route index element={<UserProfile />} />
                <Route path="orders" element={<Orders />} />
                <Route path="seller" element={<SellerOnboarding />} />
                <Route path="messages" element={<Messages />} />
                <Route path="product-upload" element={<ProductUpload />} />
              </Route>

              {/* Seller Dashboard */}
              <Route
                path="seller-dashboard"
                element={
                  <SellerLayoutProvider>
                    <SellerLayout />
                  </SellerLayoutProvider>
                }
              >
                <Route path="profile" element={<SellerDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="messages" element={<Messages />} />
                <Route path="product-upload" element={<ProductUpload />} />
              </Route>
            </Route>
          </Route>

          {/* Admin routes */}
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
            <Route path="users" element={<UserManagement />} />
            <Route path="users/:email" element={<AnalyticAndReports />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="sellers" element={<SellerManagement />} />
            <Route path="orders" element={<OrdersAndPayment />} />
            <Route path="transactions" element={<Transaction />} />
            <Route path="analytics" element={<AnalyticAndReports />} />
            <Route path="communication" element={<Communication />} />
            <Route path="disputes" element={<DisputeResolution />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="settings" element={<PlatformSettings />} />
            <Route path="logout" element={<Navigate to="/login" replace />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
