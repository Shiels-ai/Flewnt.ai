import React, { useEffect, useState } from "react";
import SiteNav from "./components/SiteNav";
import Home from "./pages/Home";
import Flewnt from "./pages/projects/Flewnt";
import Trust2 from "./pages/projects/Trust2";
import Axion from "./pages/projects/Axion";

type Route = 
  | { name: "home" }
  | { name: "flewnt" }
  | { name: "trust2" }
  | { name: "axion" };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash.startsWith("/projects/flewnt")) return { name: "flewnt" };
  if (hash.startsWith("/projects/trust2")) return { name: "trust2" };
  if (hash.startsWith("/projects/axion")) return { name: "axion" };
    return { name: "home" };
}

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>(parseHash());
  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <SiteNav />
      {route.name === "home" && <Home />}
      {route.name === "flewnt" && <Flewnt />}
      {route.name === "trust2" && <Trust2 />}
      {route.name === "axion" && <Axion />}
          </div>
  );
};

export default App;
