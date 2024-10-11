require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Importar rotas
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

// Importar middleware
const authMiddleware = require('./middlewares/authMiddleware');

// Rotas de Autenticação
app.use('/api/auth', authRoutes);

// Rotas de Transações (protegidas pelo middleware de autenticação)
app.use('/api/transactions', authMiddleware, transactionRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
