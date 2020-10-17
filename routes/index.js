const express = require('express');
const { Mongoose } = require('mongoose');
const { findByIdAndUpdate } = require('../models/Questions');
const Question = require('../models/Questions')
const User = require('../models/Users')
const Prova =  require('../models/Provas')
const router  = express.Router();



router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/adicionar-questao', (req, res, next) => {
  res.render('adicionar-questao');
});

router.get('/configuracoes', (req, res, next) => {
  res.render('configuracoes');
});

router.get('/fale-conosco', (req, res, next) => {
  res.render('fale-conosco');
});

router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.get('/conexoes', (req, res, next) => {
  res.render('conexoes');
});

router.get('/nossos-clientes', (req, res, next) => {
  res.render('nossos-clientes');
});

router.get('/provas-criadas', async (req, res, next) => {

  const ProvasList = await Prova.find();

  res.render('provas-criadas', {ProvasList});

});

router.get('/provas-realizadas', async  (req, res, next) => {

  const ProvasList = await Prova.find();

  res.render('provas-realizadas', {ProvasList});

});

router.get('/questoes-criadas', async (req, res, next) => {
  const QuestionList = await Question.find();

  res.render('questoes-criadas', {QuestionList});
});






router.get('/visao-prova', async (req, res, next) => {
  
  const QuestionList = await Question.find();

  res.render('visao-prova', {QuestionList});



});


router.get('/signup', (req, res, next) => {
  res.render('signup');
});





router.get('/adicionar-prova', async  (req, res, next) => {
  const QuestionList = await Question.find();

  res.render('adicionar-prova', {QuestionList});
});





router.get('/questoes-criadas/:id/edit', async (req, res, next) => {
  try{
    const { id } = req.params;

    const questao = await Question.findById(id);

    res.render ('questoes-edit', questao);
  } catch (error) {
    return next(error);
  }


});





router.post('/provas-criadas', async (req, res, next) => {
 

try{
  
  //const questions = await Question.find();
  //const {titulo, tema  } = req.body;

console.log(req.body);

 // const  tema= "tema"
 // const titulo = "titulo"
 // console.log("Questions", questions);
  //const newProva = new Prova({tema,titulo, listagemQuestoes:[questions]});

  //await newProva.save();
 // res.redirect('/provas-criadas');

} catch (error) {
  return next(error);
}




})





router.post('/questoes-edit/:id', async (req, res, next) => {

  try{
    const {assunto, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, comentario  } = req.body;
    const { id } = req.params;
    await Question.findByIdAndUpdate( id, req.body, {new: true}, 
      function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/questoes-criadas')
        
      }
    } )
    
   
    
  



    
   

    

  } catch (error){
  

  }



})










router.post('/questoes-criadas/:id/delete', async (req, res, next) => {

try{
  const { id } = req.params;

  await Question.findByIdAndDelete(id);
  res.redirect('/questoes-criadas');

}catch  (error){
  return next(error);
}

})








router.post('/questoes-criadas', async (req, res, next) => {
    try {
      //console.log(req.body);
      const {assunto, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, comentario  } = req.body;

      console.log (assunto, enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, comentario)
      //const assunto = req.body.assunto;
      //const enunciado = req.body.enunciado;
      //const alternativaA= req.body.alternativaA;
      //const alternativaB= req.body.alternativaB;
      //const alternativaC= req.body.alternativaC;
      //const alternativaD= req.body.alternativaD;
      //const alternativaCorreta= req.body.alternativaCorreta;
      //const comentario= req.body.comentario;


        const newQuestion = new Question({assunto, enunciado, alternativaA, alternativaB, alternativaC,
          alternativaD, alternativaCorreta, comentario});

          await newQuestion.save();

          res.redirect('/questoes-criadas')

         // console.log(newQuestion);
    } catch (error) {
      
    }
})



router.post('/signup', async (req, res, next) => {
  try {
    //console.log(req.body);
    const {nomeCompleto, email, dataNascimento, senha  } = req.body;

    console.log (nomeCompleto, email, dataNascimento, senha )
      const newUser = new User({nomeCompleto, email, dataNascimento, senha});
        await newUser.save();
        res.redirect('/questoes-criadas')

       // console.log(newQuestion);
  } catch (error) {
    
  }
})













module.exports = router;
