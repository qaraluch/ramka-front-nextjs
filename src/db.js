const PouchDB = require("pouchdb");
// const path = require("path");

function initDB(name) {
  let db = new PouchDB(name);
  return db;
}

async function pullDataDB(dbName, reducerFn) {
  let db = initDB(dbName);
  const allDocs = await db.allDocs({ include_docs: true });
  const allDocsReduced = allDocs.rows.reduce(reducerFn, []);
  return allDocsReduced;
}

async function pullAllInfoDB(dbName) {
  try {
    const allInfo = await pullDataDB(dbName, (acc, next) => [...acc, next.doc]);
    return allInfo;
  } catch (error) {
    return new Error(
      `db.js - pullAllInfoDB() - Sth. went wrong: ...\n ${error}`
    );
  }
}

module.exports = {
  pullAllInfoDB,
};
