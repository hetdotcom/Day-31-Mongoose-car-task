const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  sName: {
    type: String,
    required: [true, 'Please enter Name of user'],
  },
  nMobile: {
    type: Number,
    required: [true, 'Please enter mobile number'],
  },
  sCity: {
    type: String,
    required: [true, 'Please enter city where you live'],
  },
})


module.exports = mongoose.model('users', userSchema)
