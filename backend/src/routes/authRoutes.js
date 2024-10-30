const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota de Registro
router.post('/register', authController.register);

// Rota de Login
router.post('/login', authController.login);

// Rota para obter dados do usuário autenticado
router.get('/me', authMiddleware, authController.me);

module.exports = router;
