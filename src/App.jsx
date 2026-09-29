import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreationsPage from "./pages/CreationsPage";
import ServicesPage from "./pages/ServicesPage";
import DesignPage from "./pages/DesignPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/creations" element={<CreationsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
