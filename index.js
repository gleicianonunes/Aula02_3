// imports iniciais do sistema
import mongoose from 'mongoose';

require('dotenv').config();

// conectar ao mongodb atlas pelo mongoose com função assincrona
(async () => {
   try {
      // se fosse local mongoose.connect('mongodb://localhost/grades', {...});
      await mongoose.connect(
         'mongodb+srv://' +
            process.env.USERDB +
            ':' +
            process.env.PWDDB +
            '@cluster0.puuvl.mongodb.net/grades?retryWrites=true&w=majority',
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         }
      );
   } catch (error) {
      console.log('Erro ao conectar ao MongoDB Atlas.');
   }
})();

// cria o model para o esquema
const studentSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   subject: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   value: {
      type: Number,
      required: true,
   },
   lastModified: {
      type: Date,
      default: Date.now,
   },
});

// definindo o modelo da coleção, o terceiro parâmetro força usar a collection student
mongoose.model('student', studentSchema, 'student');

const student = mongoose.model('student');

new student({
   name: 'Ptecas',
   subject: 'Matematica',
   type: 'Prova Final',
   value: 30,
   lastModified: Date(),
})
   .save()
   .then(() => {
      console.log('Documento Inserido');
   })
   .catch((err) => {
      console.log('Falha ao inserir o documento.');
   });

// .then(console.log('Conectado ao mongodb atlas'))
// .catch((err) => {
//    console.log('Erro ao conectar ao MongoDB Atlas. ' + err);
// });

// voltamos com o put
app.put('/');
