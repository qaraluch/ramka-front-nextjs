import Head from "next/head";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Link from "../components/Link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ramka - dashboard</title>
      </Head>
      <Container>
        <Header />
        <Link href="view-db-records-table" color="secondary">
          view-db-records-table
        </Link>
      </Container>
    </>
  );
}
