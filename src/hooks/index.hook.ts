import React, { useState, useEffect } from "react";

export const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const resizeHandle = () => {
      const check = window.innerWidth < 768;
      setIsMobile(check);
    };

    window.addEventListener("resize", resizeHandle);

    resizeHandle();

    return () => window.removeEventListener("resize", resizeHandle);
  }, []);

  return isMobile;
};
