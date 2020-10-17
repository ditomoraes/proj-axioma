const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({

  nomeCompleto: {type: String, required: true},
  email: {type: String, required: true},
  dataNascimento: {type: String, required: true},
  senha: {type: String, required: true},


},{
  timestamps: true,
});


const User = mongoose.model('user', userSchema);

module.exports = User;


