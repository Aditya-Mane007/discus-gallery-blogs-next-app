import HomeLayout from "@/components/Layout/HomeLayout";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log(navigator.platform);
  }, []);
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
