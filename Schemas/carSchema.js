const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  sModel: {
    type: String,
    required: [true, 'Please add brand'],
    unique: true,
  },

  sFuelType: {
    type: String,
    required: [true, 'Please enter fuel type of car'],
    unique: false,
  },
  sType: {
    type: String,
    required: [true, 'Please enter type of car'],
    unique: false,
  },

  nSafetyRating: {
    type: Number,
    required: [true, 'Please enter safety rating'],
    unique: false,
  },

  oBrand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brands',
  },
})

module.exports = mongoose.model('cars', carSchema)
