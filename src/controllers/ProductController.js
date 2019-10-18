const Product = require('../models/Product');

module.exports = {

    async index(req, res) {

        const {product_id} = req.params;

        const product = await Product.findOne({_id: product_id});

        if(!product) return res.sendStatus(404);

        return res.json(product);

    },

    async show(req, res) {

        const {nome} = req.query;

        const products = !nome ? await Product.find() : await Product.find({nome: new RegExp(nome, 'i')}).limit(5);
        
        return res.json(products);

    },

     async showByCategory(req, res) {

        const {categoria} = req.query;

        const products = await Product.find({categoria: categoria});
        
        return res.json(products);

    },
    
    async store(req, res) {
        
        const {nome, descricao, categoria, valor} = req.body;

        const product = await Product.create({       
            nome,
            descricao,
            categoria,
            valor
        })

        return res.json(product)
    }

};
