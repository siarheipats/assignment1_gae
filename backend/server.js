require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const entriesRoutes = require('./routes/entries');

//App
const app = express();

// Middleware
/*
This is a logger
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})*/
app.use(express.json({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ mssg: "Welcome to Journal Entries API" });
})
app.use('/api/entries', entriesRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    // Listen
    app.listen(process.env.PORT, () => {
        console.log(`API is woring on port ${process.env.PORT}`);
    })
}).catch((error) => { console.log(error) })

