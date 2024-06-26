const express = require('express');
require('dotenv').config();
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url'); 
const app =express();
const cors = require('cors')

const PORT = 5050;

// Connect to MongoDB
connectToMongoDB(process.env.MONGO_URL).then(() => {
    console.log("MongoDb Connected Successfully!!!");
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors())

// Route handling
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId: shortId },
            { 
                $push: { visitHistory: { timestamp: Date.now() } }
            },
            { new: true } // This option returns the updated document
        );

        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (error) {
        console.error("Error finding and updating URL", error);
        res.status(500).send('Internal Server Error');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON');
        return res.status(400).send({ message: 'Malformed JSON' });
    }
    next();
});

// Start the server
app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`));
