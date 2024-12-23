// server.js

require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(express.json());

// Configurar CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'https://backend-kohl-pi-41.vercel.app/ver'], // Altere para o endereço do seu front-end
  credentials: true,
};

app.use(cors(corsOptions));

// Importar rotas
const authRoutes = require('./src/routes/authRoutes'); // Mantenha esta
const transactionRoutes = require('./src/routes/transactionRoutes');
const sourceRoutes = require('./src/routes/sourceRoutes'); // Importar as rotas de fontes

// Importar middleware
const authMiddleware = require('./src/middlewares/authMiddleware');

// Rotas de Autenticação
app.use('/api/auth', authRoutes); // Aqui você utiliza authRoutes uma vez

// Rotas de Transações (protegidas pelo middleware de autenticação)
app.use('/api/transactions', authMiddleware, transactionRoutes);

// Rotas de Fontes (protegidas pelo middleware de autenticação)
app.use('/api/sources', sourceRoutes); // Usar as rotas de fontes

// Rota padrão
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
