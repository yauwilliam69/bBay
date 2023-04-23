//This file is to view the current catalog by establishing
//a connection to the mongodb and printing its contents.

const { MongoClient } = require("mongodb");

/* Connect to MongoDB */
ATLAS_URI = 'mongodb+srv://webdev:webdev@catalog.qaasjwh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(ATLAS_URI);

async function run() {
  try {
    let conn;
    try {
      conn = await client.connect();
    } catch(e) {
      console.error(e);
    }
    let db = conn.db("catalog");
    let coll = await db.collection("catalog")

    //Print contents of the database (collection)
    await coll.find({},{_id:0}).toArray().then(result => console.log(result));
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

