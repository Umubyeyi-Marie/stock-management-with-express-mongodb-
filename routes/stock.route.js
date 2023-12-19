const express = require('express');
const stockRoutes = express.Router();
const { create, find, update, list} = require('../controller/stock.controller.js')

stockRoutes.get('/list', list);
stockRoutes.post('/add',create);
stockRoutes.get('/find',find);
stockRoutes.put('/update',update); 


module.exports = stockRoutes;

