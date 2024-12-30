import { useEffect } from "react";
import HomeLayout from "@/components/Layout/HomeLayout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}
