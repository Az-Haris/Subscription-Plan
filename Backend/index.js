require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        console.log("Successfully connected to MongoDB!");

        const database = client.db('RechargeDB');
        const rechargeCollection = database.collection('RechargeCollection');

        // Save Recharge History
        app.post('/saveRecharge', async (req, res) => {
            const recharge = req.body;
            const result = await rechargeCollection.insertOne(recharge);
            res.json(result);
        });

        // Get latest 10 Recharge History (sorted latest first)
        app.get('/getRecharge', async (req, res) => {
            const result = await rechargeCollection.find({})
                .sort({ _id: -1 })
                .limit(10)
                .toArray();

            // Mask the number field
            const formattedResult = result.map(item => ({
                ...item,
                Number: item.Number.replace(/^(\d{3})\d+(?=\d{2}$)/, '$1******') // Mask middle digits
            }));

            res.json(formattedResult);
        });

    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}
run(); // Run the function without closing the client

app.get('/', (req, res) => {
    res.send("Hello from Subscription Server...");
});

app.listen(port, () => {
    console.log('Server is running on port:', port);
});
