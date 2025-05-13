const express = require('express');
const app = express();
const port = 3000;

// Rota simples
app.get('/', (req, res) => {
  res.send('Olá do servidor Node.js!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
