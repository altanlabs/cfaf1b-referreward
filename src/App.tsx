import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/landing';
import HomePage from './pages';
import PostJobPage from './pages/post-job';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<HomePage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}