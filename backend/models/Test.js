const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Test', TestSchema);
