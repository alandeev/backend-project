const { validationResult } = require('express-validator');

const UserRepository = require('../repositories/UserRepository');

class AuthController {
  static async authenticate(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    return res.json("OK");
  }

  static async register(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    try{
      const user = await UserRepository.add(req.body);
      res.json(user);
    }catch (err) {
      if(!err.errors){
        return res.status(400).json({ errors: [ err.message ] });
      }
      return res
        .status(400)
        .json({ errors: err.errors.map((error) => error.message) });
    }
  }
}

module.exports = AuthController;