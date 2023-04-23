/* Adapted from HW 5*/
MongoClient = require('mongodb').MongoClient
/* Connect to MongoDB */
const ATLAS_URI = 'mongodb+srv://webdev:webdev@catalog.qaasjwh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(ATLAS_URI);
let conn;
let db;

async function start() {
    try {
        conn = await client.connect();
    } catch(e) {
        console.error(e);
    }
    db = conn.db("catalog");
}


async function get_catalog() {
    let collection = await db.collection("catalog");
    let catalog = await collection.find({}).toArray();
    return catalog
}

const express = require('express')
const port = 3002
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


//Get the store's catalog
app.get('/catalog', (req, res) => {
    console.log("Client requested catalog!")
    res.send(get_catalog())
})

//Client makes an order.
app.post('/order', async (req, res) => {
    console.log("Client made an order: ");
    console.log(req.body);
    let coll = await db.collection("orders")

    const result = await coll.insert(req.body);
    console.log(result);
})

app.listen(port, async () => {
    await start();
    console.log("Bbay server connected to mongo database! Catalog currently looks like: ")
    console.log(await get_catalog())
    console.log(`\nBbay Server listening at http://localhost:${port}`)
})