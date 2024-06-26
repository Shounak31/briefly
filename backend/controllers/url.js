const shortid = require('shortid');
const URL = require('../models/url'); // Ensure the correct import path

function isValidURL(url) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    return regex.test(url);
}

async function generateNewShortURL(req, res) {
    const body = req.body;
   // if (!body.url) return res.status(400).json({ error: "url is required" });

    if (!isValidURL(body.url)) {
        return res.status(400).json({ error: "Enter a valid URL" });
    }

    const shortID = shortid.generate(); // Use .generate() to get a unique ID
    try {
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
        });
        return res.json({ id: shortID });
    } catch (error) {
        console.error('Error creating URL:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortID;
    try {
        const result = await URL.findOne({ shortId });
        if (!result) {
            return res.status(404).json({ error: "URL not found" });
        }
        return res.json({ 
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { generateNewShortURL, handleGetAnalytics };
