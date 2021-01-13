const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 30],
            msg: 'Field fullname must have be from 2 to 30 characters',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail already exists',
        },
        validate: {
          isEmail: {
            msg: 'Email invalid.',
          },
        },
        set(value){
          return this.setDataValue('email', value.toLowerCase());
        }
      },
      password: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Field password must have be from 6 to 50 characters',
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 16],
            msg: 'Field phone must have be from 6 to 16 characters',
          },
        }, 
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
      },
    }, {
      tableName: 'users',
      sequelize
    });
  }
}

module.exports = User;