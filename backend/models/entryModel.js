const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    guestName: {
        type: String,
        required: true
    },
    entryText: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Entry", entrySchema);

