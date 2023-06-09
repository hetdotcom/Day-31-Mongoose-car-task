const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  sCar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cars',
  },
  sBuyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  sSeller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sellers',
  },
  sCity: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('transactions', transactionSchema)
