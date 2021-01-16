const express = require('express');
const router = express.Router(); //traigo el metodo Router

const productosController = require('../controllers/productosController');

router.get('/detail/:id/:category',productosController.detalle);

module.exports = router;