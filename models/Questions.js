const mongoose = require("mongoose");
const { Schema } = mongoose;


const questionSchema = new Schema({

  enunciado: {type: String, required: true},
  assunto: {type: String, required: true},
  alternativaA: {type: String, required: true},
  alternativaB: {type: String, required: true},
  alternativaC: {type: String, required: true},
  alternativaD: {type: String, required: true},
  alternativaCorreta: {type: String, required: true, enum:['a','b','c','d'] },
  comentario: {type: String, required: true},
  userCriador: {type: String, required: false}

},{
  timestamps: true,
});




const Question = mongoose.model('question', questionSchema);

module.exports = Question;


