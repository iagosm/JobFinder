const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const port = 3000;

app.listen(port, function(){
  console.log(`O express está rodando na porta ${port}`);
})

//Body parser
app.use(bodyParser.urlencoded({ extended: false}));

// Db Connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso!");
  })
  .catch(err => {
    console.log('Ocorreu um er', err);
  })

// Routes 
app.get('/', (req, res) => {
  res.send('está funcionando 3');
})

//jobs routes
app.use('/jobs', require('./routes/jobs'));