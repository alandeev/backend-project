const Model = require('../models/User');

class UserRepository {
  static async add({ full_name, email, password, phone, birth_date }){
    try{
      let user = Model.build({ full_name, email, password, phone, birth_date });
      await user.save();

      return user;
    }catch(err){
      return err;
    }
  }

  static getUserById(UserId){
    if(typeof user_id !== "number"){
      throw new Error("UserId not is valid");
    }
    return Model.findByPk(user_id);
  }

  static getUserByEmail(value){
    if(typeof value !== "string"){
      throw new Error("Email not is valid");
    }
    return Model.findOne({ email: value });
  }
}

module.exports = UserRepository;