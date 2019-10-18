const Client = require('../models/Client');

module.exports = {

    async index(req, res, next) {

        const {nome} = req.query;

        const clients = !nome ? await Client.find() : await Client.find({nome: new RegExp(nome, 'i')});

        return res.json(clients);

    },

    async show(req, res) {

        const clients = await Client.find();

        return res.json(clients);

    },
    
    async store(req, res) {
        
        const {nome, telefone, instagram} = req.body;

        const client = await Client.create({       
            nome,
            telefone,
            instagram
        })

        return res.json(client)
    }

};