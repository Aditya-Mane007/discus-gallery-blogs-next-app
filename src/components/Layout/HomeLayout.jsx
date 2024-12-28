import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import LandscapeWarning from "../LandscapeWarning";

function HomeLayout({ children }) {
  const [showWarning, setShowWarning] = useState(false);
  const checkDevice = () => {
    return (
      typeof navigator !== undefined &&
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      )
    );
  };

  const checkOrientation = () => {
    if (typeof window === undefined) return;
    return window.matchMedia("(orientation:landscape)").matches;
  };

  const warningHandler = () => {
    if (checkDevice() && checkOrientation()) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  useEffect(() => {
    console.log("Device :", checkDevice());
    console.log("Orientation :", checkOrientation());

    warningHandler();

    window.addEventListener("resize", warningHandler);
  }, []);

  if (showWarning) {
    return (
      <div className="w-full h-full">
        <LandscapeWarning />
      </div>
    );
  }

  return (
    <>
      <div className="w-screen h-screen max-w-[1440px] max-h-[100vh] flex mx-auto text-[#f0f0f0] homeLayout">
        <nav className="max-[768px]:w-[100%] max-lg:w-[40%] w-[30%] h-full max-[1440px]:h-full bg-[#444444] p-8 nav">
          <Sidebar />
        </nav>
        <main className="max-[768px]:w-[100%] max-lg:w-[60%] w-[70%] h-full max-lg:p-0 bg-[#333333] main">
          {children}
        </main>
      </div>
    </>
  );
}

export default HomeLayout;
