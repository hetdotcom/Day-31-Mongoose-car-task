const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
  sSeller: {
    type: String,
    required: [true, 'add seller name'],
    unique: true,
  },

  sCity: {
    type: String,
    required: [true, 'add seller city'],
  },

  aCarStock: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cars',
    }],
})

module.exports = mongoose.model('sellers', sellerSchema)
