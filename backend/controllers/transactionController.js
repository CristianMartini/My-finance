//controllers\transactionController.js
const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  const { type, category, amount, date, description } = req.body;

  try {
    const transaction = new Transaction({
      user: req.user._id,
      type,
      category,
      amount,
      date,
      description,
    });

    await transaction.save();

    res.status(201).json({
      message: 'Transação criada com sucesso',
      transaction,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;

  try {
    let transaction = await Transaction.findOne({ _id: id, user: req.user._id });

    if (!transaction) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }

    transaction.type = type || transaction.type;
    transaction.category = category || transaction.category;
    transaction.amount = amount || transaction.amount;
    transaction.date = date || transaction.date;
    transaction.description = description || transaction.description;

    await transaction.save();

    res.status(200).json({
      message: 'Transação atualizada com sucesso',
      transaction,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findOneAndDelete({ _id: id, user: req.user._id });

    if (!transaction) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }

    res.status(200).json({ message: 'Transação deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
