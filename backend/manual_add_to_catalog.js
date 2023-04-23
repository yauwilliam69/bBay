//This file is to update the catalog manually inserting 
//the following object into our catalog. Note that it just
//inserts, doesn't redo.

const { MongoClient } = require("mongodb");

/* Connect to MongoDB */
ATLAS_URI = 'mongodb+srv://webdev:webdev@catalog.qaasjwh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(ATLAS_URI);

const catalog_items = [
  {name: "WDB Shirt", price: 15.00, quantity: 100},
  {name: "WDB Pin", price: 15.00, quantity: 100},
  {name: "WDB Hat", price: 15.00, quantity: 100},
  {name: "WDB Sticker", price: 15.00, quantity: 100},
];

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

    //Insert the item into the database
    const result = await coll.insertMany(catalog_items);
    console.log(result.insertedIds);

    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

