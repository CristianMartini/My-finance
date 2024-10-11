const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Todas as rotas aqui estão protegidas pelo middleware de autenticação definido no server.js

// Criar Transação
router.post('/', transactionController.createTransaction);

// Obter Transações
router.get('/', transactionController.getTransactions);

// Atualizar Transação
router.put('/:id', transactionController.updateTransaction);

// Deletar Transação
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
