import { ThemeProvider } from './components/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SignUp from './features/auth/SignUp';
import Login from './features/auth/Login';
import EmailVerification from './features/auth/EmailVerification';
import AllProducts from './pages/AllProducts';
import UserProfile from './features/user/UserProfile';
import { UserLayoutProvider } from './components/layout/UserLayout/UserLayoutContext';
import UserLayout from './components/layout/UserLayout/UserLayout';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="dashboard" element={<UserLayoutProvider><UserLayout /></UserLayoutProvider>}>
            <Route path='profile' element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider >
  );
}

export default App;