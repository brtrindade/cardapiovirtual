const express = require('express');

const ProductController = require('./controllers/ProductController');
const ClientController = require('./controllers/ClientController');
const SaleController = require('./controllers/SaleController');

const routes = express.Router();

// routes.get('/dashboard', DashboardController.show);

//routes.get('/sales', SaleController.index);
routes.get('/orders', OrderController.show);
routes.post('/orders', OrderController.store);
//routes.post('/sales/:sales_id/pay', PaymentController.store);

routes.get('/products/:product_id', ProductController.index);
routes.get('/products', ProductController.show);
routes.post('/products', ProductController.store);

routes.get('/clients', ClientController.index);
//routes.get('/clients', ClientController.show);
routes.post('/clients', ClientController.store);


module.exports = routes;
