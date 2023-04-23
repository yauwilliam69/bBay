/* Adapted from HW 5*/
import { MongoClient } from "mongodb";

/* Connect to MongoDB */
ATLAS_URI = 'mongodb+srv://webdev:webdev@catalog.qaasjwh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(ATLAS_URI);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("catalog");

async function get_catalog() {
    let collection = await db.collection("posts");
    let catalog = await collection.find({})
    .limit(50)
    .toArray();
}

export default db;

const express = require('express')
const port = 3002
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/posts', (req, res) => {
  res.send(Object.values(data))
})

app.post('/post', (req, res) => {
  if (data[req.body.id]) {
    throw new Error("Post exists!")
  }
  const newPost = {id:parseInt(req.body.id, 10), title: req.body.title, body: req.body.body, comments: []}
  data[req.body.id] = newPost
  res.send(newPost)
  console.log(newPost)
})

app.post('/post/:postId/comment', (req, res) => {
  const post = data[req.params.postId]
  post.comments = [...post.comments, req.body.newComment]
  res.send(post)
})

app.listen(port, () => {
  console.log(`Block Server listening at http://localhost:${port}`)
})