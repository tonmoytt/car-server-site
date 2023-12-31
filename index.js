const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port =process.env.PORT|| 5000

// middleware
app.use(cors())
app.use(express.json())




// Car-doctors-server
// 0iyblgFDV5uY9ol7




const uri = `mongodb+srv://${process.env.Name_BD}:${process.env.Password_BD}@cluster0.jfgqsm5.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);









app.get('/', (req, res) => {
    res.send('Hello i am active!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})