//TODO: add to config
// dev manual DB path
const dbServerPath = "../manual/.DB-ramka-manual";

async function pullDataFromDB(dbServerPath) {
  try {
    const path = require("path");
    const { pullAllRecords } = require("../src/db");
    const pathResolved = path.resolve(dbServerPath);
    const result = await pullAllRecords(pathResolved);
    return result;
  } catch (error) {
    console.log(error);
  }
}

const Index = props => (
  <div>
    <h1>DB entries</h1>
    <ul>
      {props.db.map(itm => (
        <li key={itm.id}>
          <div>{itm.id}</div>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async function({ req }) {
  if (req) {
    //TODO: add to tiljs
    // Runs only in the server
    //TODO: to optimize modules in webpack boundle for only server side
    // see: [SSR and Server Only Modules](https://arunoda.me/blog/ssr-and-server-only-modules)
    const dbData = await pullDataFromDB(dbServerPath);
    return { db: dbData.rows };
  }
};

export default Index;
