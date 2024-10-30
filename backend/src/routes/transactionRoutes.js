// routes/transactionRoutes.js

const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Todas as rotas aqui estão protegidas pelo middleware de autenticação definido no server.js

// Obter Transação por ID (rota mais específica)
router.get('/:id', transactionController.getTransaction);

// Obter Todas as Transações
router.get('/', transactionController.getTransactions);

// Criar Transação
router.post('/', transactionController.createTransaction);

// Atualizar Transação
router.put('/:id', transactionController.updateTransaction);

// Deletar Transação
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
