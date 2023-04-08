const express = require('express');
const Entry = require('../models/entryModel');

const router = express.Router();

router.get('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const entries = await Entry.find({}).sort({ createdAt: -1 });
    res.status(200).json(entries);
});

router.post('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { guestName, entryText } = req.body;
    try {
        const journalEntry = await Entry.create({ guestName, entryText });
        res.status(200).json(journalEntry);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;