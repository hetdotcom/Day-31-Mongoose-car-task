/* eslint-disable no-undef */
const mongoose = require('mongoose')
const dbConnect = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI)
    console.log(
      'Mongo connected at',
      dbConnection.connection.host + ':' + dbConnection.connection.port
    )
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect
