const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

router.get('/test', async (req, res) => {
  try {
    const novoTeste = new Test({ nome: 'Teste de Inserção' });
    await novoTeste.save();
    res.send('Dados inseridos com sucesso no MongoDB!');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
    res.status(500).send('Erro ao inserir dados no banco de dados');
  }
});

module.exports = router;
