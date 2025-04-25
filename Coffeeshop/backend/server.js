const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@famoijancluster.rd6zsjv.mongodb.net/?appName=famoijanCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffeeDb = client.db("coffee-shop");
    const coffeeCollection = coffeeDb.collection("coffees");

    //create API here

    app.post("/coffees", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
      console.log(coffee);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

////API

app.get("/", (req, res) => {
  res.send("<h1> Coffee-Shop server is runing</h1> <hr/>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is runing on http://localhost:${process.env.PORT}`);
});
