import { useEffect, useState } from "react";

function whichDevice(width) {
  if (width < 600) {
    return "mobile";
  } else if (width < 900) {
    return "tablet";
  } else if (width < 1366) {
    return "desktop";
  }
  return "bigDesktop";
}

function isPhoneOrTab() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: undefined,
    windowHeight: undefined,
    device: "desktop",
    isMobile: false,
    isPhoneOrTab: false,
  });
  useEffect(() => {
    function handleResize() {
      const device = whichDevice(window.innerWidth);
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        device,
        isMobile: device === "mobile",
        isPhoneOrTab: isPhoneOrTab(),
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export { useWindowSize };
