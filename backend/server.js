require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(express.json());

// Importar rotas
const testRoutes = require('./routes/testRoutes');

// Usar rotas com prefixo /api
app.use('/api', testRoutes);

// Rota de teste direta
app.get('/hello', (req, res) => {
  res.send('Olá, mundo!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
