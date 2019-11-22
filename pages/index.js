import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { pullDataFromDB } from "../src/db";
import AppContainer from "../components/AppContainer";
import theme from "../src/theme";
//TODO: add all to tiljs
//TODO: add to config
// dev manual DB path
const dbServerPath = "../manual/.DB-ramka-manual";

const Index = props => (
  <React.Fragment>
    <Head>
      <title>My page</title>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer {...props} />
    </ThemeProvider>
  </React.Fragment>
);

Index.getInitialProps = async function({ req }) {
  if (req) {
    // Runs only in the server
    //TODO: to optimize modules in webpack boundle for only server side
    // see: [SSR and Server Only Modules](https://arunoda.me/blog/ssr-and-server-only-modules)
    const dbData = await pullDataFromDB(dbServerPath);
    return { db: dbData.rows };
  }
};

export default Index;
