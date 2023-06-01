const express = require('express');
const app = express();
const db = require('./db/connection');

const port = 3000;

app.listen(port, function(){
  console.log(`O express está rodando na porta ${port}`);
})

// Db Connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso!");
  })
  .catch(err => {
    console.log('Ocorreu um erro', err);
  })

// Routes 
app.get('/', (req, res) => {
  res.send('está funcionando 5');
})