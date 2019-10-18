const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nome: String,
    mesa: Number,
});

module.exports = mongoose.model('Client', ClientSchema);