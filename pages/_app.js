import { ThemeProvider } from "styled-components";
import GlobalStyle from "../utilities/style/Global"
import MIM from "../utilities/theme";
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MIM</title>
        <link rel="icon" href="/favicon.png" />

      </Head> 

      <ThemeProvider theme={MIM}>
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp


//started 4/12/2021