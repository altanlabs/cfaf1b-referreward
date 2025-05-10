import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/landing';
import HomePage from './pages';
import PostJobPage from './pages/post-job';
import SignInPage from './pages/sign-in';
import SignUpPage from './pages/sign-up';
import ProfilePage from './pages/profile';
import NotFound from './pages/NotFound';
import { AuthGuard } from './components/auth/AuthGuard';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<HomePage />} />
        <Route path="/post-job" element={
          <AuthGuard>
            <PostJobPage />
          </AuthGuard>
        } />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile" element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}