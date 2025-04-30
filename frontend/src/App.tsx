import { Routes, Route, useLocation } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Layout from '@/Layout';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import TasksPage from '@/pages/tasks/TasksPage';
import TasksCreatePage from '@/pages/taskCreate/TasksCreate';

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
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks/create" element={<TasksCreatePage />} />
          <Route path="chats" element={<DashboardPage />} />
          <Route path="users" element={<DashboardPage />} />
          <Route path="apps" element={<DashboardPage />} />
        </Route>

        <Route path="/login" element={<DashboardPage />} />
        <Route path="/signup" element={<DashboardPage />} />
      </Routes>
    </>
  );
};

export default App;
