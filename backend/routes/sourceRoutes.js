// routes/sourceRoutes.js

const express = require('express');
const router = express.Router();
const sourceController = require('../controllers/sourceController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importe o middleware de autenticação

router.use(authMiddleware); // Aplicar o middleware de autenticação em todas as rotas

// Criar nova fonte
router.post('/', sourceController.createSource);

// Listar fontes do usuário
router.get('/', sourceController.getSources);

module.exports = router;