const { body } = require('express-validator');

exports.UserCreateValidation = [
  body("full_name").isString().isLength({ min: 4, max: 20 }),
  body("email").isEmail(),
  body("password").isString().isLength({ min: 4, max: 12 }),
  body("phone").isMobilePhone("pt-BR"),
  body("birth_date").isDate()
]

exports.UserConnectValidation = [
  body("email").isEmail().withMessage("Email invalido."),
  body("password").isString().isLength({ min: 4, max: 12 }).withMessage("Senha precisa ter no minimo 4 caracteres e no máximo 12")
]