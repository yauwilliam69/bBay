import { MongoClient } from "mongodb";

const ATLAS_URI = 'mongodb+srv://webdev:webdev@catalog.qaasjwh.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(ATLAS_URI);

let conn;
try {
  conn = await client.connect();
  console.log("Bbay server connected to mongo database! Catalog currently looks like: ")
} catch(e) {
  console.error(e);
}

let db = conn.db("catalog");

export default db;