import { Routes, Route, useLocation } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Layout from '@/Layout';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import TasksPage from '@/pages/tasks/TasksPage';
import TasksCreatePage from '@/pages/taskCreate/TasksCreatePage';
import UsersPage from '@/pages/users/UsersPage';
import ChatsPage from '@/pages/chats/ChatsPage';
import NotFoundPage from '@/pages/notFound/NotFoundPage';
import AuthenticationPage from '@/pages/auth/AuthPage';
import StarterPage from './pages/starter/StarterPage';

const App = () => {
  const { initializeTheme } = useThemeStore();
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(60), 1000);
    setTimeout(() => setProgress(100), 2000);
  }, [location]);

  useEffect(() => {
    const onPageLoad = () => {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    };

    window.addEventListener('load', onPageLoad);

    return () => {
      window.removeEventListener('load', onPageLoad);
    };
  }, []);

  return (
    <>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/continue" element={<AuthenticationPage />} />
        {/*<Route path="/settings" element={<UsersPage />} />
        <Route path="/help" element={<AuthenticationPage />} />*/}

        <Route path="/team/:teamSlug/project/:projectSlug" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks/create" element={<TasksCreatePage />} />
          <Route path="chats" element={<ChatsPage />} />
          <Route path="members" element={<UsersPage />} />
          {/*<Route path="settings" element={<UsersPage />} />*/}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
