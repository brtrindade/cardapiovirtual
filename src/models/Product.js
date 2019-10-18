const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    categoria: [],
    valor: Number,
});

module.exports = mongoose.model('Product', ProductSchema);