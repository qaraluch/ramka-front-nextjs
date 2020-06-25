import React from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // Remove the server-side injected CSS.
  // from example: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
