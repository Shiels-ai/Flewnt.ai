import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Home from "./pages/Home";
import Flewnt from "./pages/projects/Flewnt";
import Trust2 from "./pages/projects/Trust2";
import Axion from "./pages/projects/Axion";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return null;
};

const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-slate-900">
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/flewnt" element={<Flewnt />} />
        <Route path="/projects/trust2" element={<Trust2 />} />
        <Route path="/projects/axion" element={<Axion />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
