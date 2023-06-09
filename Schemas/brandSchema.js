// /* eslint-disable no-undef */
const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,

  sBrand: {
    type: String,
    required: [true, 'Please add brand'],
  },

  sCountryOfOrigin: {
    type: String,
    required: [true, 'Please add country of origin'],
  },

  // sModels: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'cars',
  //   },
  // ],
})

module.exports = mongoose.model('brands', brandSchema)
