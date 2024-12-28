import HomeLayout from "@/components/Layout/HomeLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
