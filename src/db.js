const PouchDB = require("pouchdb");
const path = require("path");

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

async function pullDataFromDB(dbServerPath) {
  try {
    const pathResolved = path.resolve(dbServerPath);
    const result = await pullAllRecords(pathResolved);
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  pullDataFromDB
};
