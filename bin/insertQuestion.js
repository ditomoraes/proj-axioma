const mongoose = require('mongoose');
const Question = require('../models/Questions');

const questList = [
{
  enunciado: 'Quem é o vocalista da banda de rock U2?',
  assunto: 'Música',
  alternativaA: 'Bono Vox',
  alternativaB: 'Mick Jagger',
  alternativaC: 'Ozzy Orborne',
  alternativaD: 'Dave Grohl',
  alternativaCorreta: 'a',
  comentario: 'O Vocalista da Banda do U2 é Bono Vox, e encontra-se em atividade por mais de 40 anos',
  userCriador: 'Teste Jeff'
},

]


mongoose
  .connect('mongodb://localhost/proj-axioma', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Question.insertMany(questList)
    .then(quests => {
      console.log('Inserted ' + quests.length + ' questions in database');
      mongoose.connection.close();

    })
    .catch(error => console.log(error));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


