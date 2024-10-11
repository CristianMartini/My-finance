const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: [true, 'O tipo de transação é obrigatório'],
  },
  category: {
    type: String,
    required: [true, 'A categoria é obrigatória'],
  },
  amount: {
    type: Number,
    required: [true, 'O valor é obrigatório'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
