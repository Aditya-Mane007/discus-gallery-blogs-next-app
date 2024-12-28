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
      <Head>
        <meta name="google-adsense-account" content="ca-pub-3441215479960974" />
      </Head>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}
