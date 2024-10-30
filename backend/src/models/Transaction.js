//backend\models\Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: String,
    enum: ['income', 'expense'],
    required: [true, 'A categoria é obrigatória'],
  },
  subCategory: {
    type: String,
    required: [true, 'A subcategoria é obrigatória'],
  },
  type: {
    type: String,
    required: [true, 'O tipo é obrigatório'],
  },
  amount: {
    type: Number,
    required: [true, 'O valor é obrigatório'],
  },
  date: {
    type: Date,
    required: [true, 'A data é obrigatória'],
  },
  description: {
    type: String,
  },
  source: {
    type: String,
    required: [true, 'A fonte é obrigatória'],
  },
  isParcelado: {
    type: Boolean,
    default: false,
  },
  parcelas: {
    type: Number,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
