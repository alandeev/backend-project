const { Sequelize } = require('sequelize');

const UserModel = require('../models/User');

const configDB = require('../config/database');

const sequelize = new Sequelize(configDB);

UserModel.init(sequelize);