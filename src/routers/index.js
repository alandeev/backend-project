const express = require('express');

const authRoutes = require('./auth.routes');

const routes = express.Router();

//editing later
routes.get('/', (req, res) => res.json({ status: true }));


//Auth Routes Settings
routes.use('/', authRoutes);

module.exports = routes;