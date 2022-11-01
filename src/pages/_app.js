import Head from "next/head";
import Navigation from "../components/Navigation";
import { LayoutWrapper } from "../components/Wrapper";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>pedro who? WORK IN PROGRESS</title>
        <meta name="description" content="Software Engineer" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
        <Navigation />
      </LayoutWrapper>
    </>
  );
}

export default MyApp;
