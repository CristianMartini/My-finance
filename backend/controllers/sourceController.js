const Source = require('../models/Source');

// Criar nova fonte
exports.createSource = async (req, res) => {
  const { name } = req.body;
  const userId = req.user._id; // Obter o ID do usuário da requisição autenticada

  try {
    const newSource = await Source.create({ name, user: userId });
    res.status(201).json(newSource);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a fonte' });
  }
};

// Listar fontes do usuário
exports.getSources = async (req, res) => {
  const userId = req.user._id; // Obter o ID do usuário da requisição autenticada

  try {
    const sources = await Source.find({ user: userId }); // Busca fontes com base no ID do usuário
    res.status(200).json(sources); // Retorna as fontes do usuário
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as fontes' });
  }
};
// Deletar fonte
exports.deleteSource = async (req, res) => {
    const { id } = req.params; // Usar o ID para identificar a fonte a ser deletada
    const userId = req.user._id; // ID do usuário autenticado
  
    try {
      const source = await Source.findOneAndDelete({ _id: id, user: userId }); // Deleta a fonte pelo ID
      if (!source) {
        return res.status(404).json({ error: 'Fonte não encontrada' });
      }
      res.status(200).json({ message: 'Fonte deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar a fonte' });
    }
  };
  