import { useEffect } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log(navigator.platform);
  }, []);
  return (
    <>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}
