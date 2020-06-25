import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Link from "../components/Link";
import TableViewDbRecords from "../components/TableViewDbRecords";
import { pullAllInfoDB } from "../src/db";
import { DB_PATH } from "../src/constants";

export default function ViewDbRecordsTable({ dbAllInfo }) {
  return (
    <>
      <Head>
        <title>Ramka - db records view table</title>
      </Head>
      <Container maxWidth="xl">
        <Grid>
          <Grid item>
            <Header />
            <Link href="/">home</Link>
          </Grid>
          <Grid item>
            <TableViewDbRecords list={dbAllInfo} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  //TODO: implement error handling?
  const dbAllInfo = await pullAllInfoDB(DB_PATH);
  return {
    props: { dbAllInfo },
  };
}
