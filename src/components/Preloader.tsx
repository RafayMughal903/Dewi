// components/Preloader.tsx
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return <div id="preloader"></div>;
};

export default Preloader;
