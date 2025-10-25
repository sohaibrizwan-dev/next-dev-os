import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Desktop from "@/components/desktop/Desktop";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return <Desktop />;
};

export default Index;
