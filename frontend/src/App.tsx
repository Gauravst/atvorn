import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/themeStore";
import { useEffect } from "react";

const App = () => {
  const { initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
