import { ThemeProvider } from './components/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './features/pages/Home';
import SignUp from './features/auth/SignUp';
import Login from './features/auth/Login';
import EmailVerification from './features/auth/EmailVerification';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<EmailVerification />} />
          {/* Vomment */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;