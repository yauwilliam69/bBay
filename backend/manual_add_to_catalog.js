//This file is to update the catalog manually inserting 
//the following object into our catalog. Note that it just
//inserts, doesn't redo.

import { MongoClient } from "mongodb";

/* Connect to MongoDB */
const ATLAS_URI = 'mongodb+srv://webdev:webdev@catalog.qaasjwh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(ATLAS_URI);

const catalog_items = [
  {name: "shirt", price: 15.00, quantity: 100},
  {name: "pin", price: 3.00, quantity: 100},
  {name: "cap", price: 35.00, quantity: 100},
  {name: "sticker", price: 2.00, quantity: 100},
  {name: "shirt", price: 31.00, quantity: 100},
  {name: "pin", price: 8.00, quantity: 100},
  {name: "cap", price: 54.00, quantity: 100},
  {name: "sticker", price: 1.00, quantity: 100},
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

