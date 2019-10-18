const Order = require('../models/Order');

module.exports = {

    async index(req, res) {

        const {client_id} = req.query;

        const client = await Order.findOne({client: client_id});

        return res.json(client);

    },

    async show(req, res) {

        const orders = await Order.find().populate('client').populate('products.product');

        return res.json(orders);

    },

    async store(req, res) {

        const {client_id, tema, products, totalPrice, date, isOpen, payment} = req.body;

        const order = await Order.create({
            client: client_id,
            products,
            totalPrice,
            date,
            isOpen,
            payment,
        });

        // cria relacionamento entre as collections
        await order.populate('client').populate('products.product').execPopulate();

        return res.json(order);

    }

};
