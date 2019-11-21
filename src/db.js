const PouchDB = require("pouchdb");

function initDB(name) {
  let db = new PouchDB(name);
  return db;
}

async function pullAllRecords(dbName) {
  let db = initDB(dbName);
  try {
    const allDocs = await db.allDocs({ include_docs: true });
    return allDocs;
  } catch (error) {
    console.error(`db.js - pullAllRecords() - Sth. went wrong: ...\n ${error}`);
  }
}

module.exports = {
  pullAllRecords
};
