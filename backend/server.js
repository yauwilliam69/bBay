import db from "./conn.js";
// MongoClient = require('mongodb').MongoClient
// db = require('./conn.mjs') 

async function get_catalog() {
    try {
        let collection = await db.collection("catalog");
        let catalog = await collection.find({}).toArray();
        return catalog
    } catch(e) {
        console.error(e);
    }
}

// const express = require('express')
import express from "express";
import cors from "cors";
const port = 3002
// const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//Get the store's catalog
app.get('/catalog', async (req, res) => {
    console.log("Client requested catalog!")
    let ret = await get_catalog()
    // console.log("Sending them this")
    // console.log(ret)
    res.send(ret)
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
    console.log("Bbay server connected to mongo database! Catalog currently looks like: ")
    console.log(await get_catalog())
    console.log(`\nBbay Server listening at http://localhost:${port}`)
})