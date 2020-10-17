const mongoose = require("mongoose");
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema;

const provasSchema = new Schema({

  tema: {type: String, required: false},
  titulo: {type: String, required: false},
  descricao: {type: String, required: false},
  listagemQuestoes: [

    

    // {
    //   type: ObjectId,
    //   ref: "Question"

    // }
    // questao1: {type: String, required: true},
    // questao2: {type: String, required: true},
    // questao3: {type: String, required: true},
    // questao4: {type: String, required: true},
    // questao5: {type: String, required: true},
    // questao6: {type: String, required: true},
    // questao7: {type: String, required: true},
    // questao8: {type: String, required: true},
    // questao9: {type: String, required: true},
    // questao10: {type: String, required: true},
  ],
  userCriador: {type: String, required: false}

},{
  timestamps: true,
});


const Prova = mongoose.model('prova', provasSchema);

module.exports = Prova;


