const messages = require('../Messages')
const Car = require('../Schemas/carSchema')
const Transaction = require('../Schemas/transactionSchema')
const User = require('../Schemas/userSchema')


const addBuyer = async (req, res) => {
  try {
    req.body.aCar = []
    const oBuyer = await new User(req.body).save()

    return res.status(messages.status.statusSuccess).send({
      oBuyer: oBuyer,
      message: messages.messages.buyerAdded.sMessage,
    })
  } catch (error) {
    console.log(error)
    // console.log(error.code))
    if (error.code === 11000) {
      return res
        .status(messages.status.internalServerError)
        .json(messages.messages.duplicateBuyer)
    } else {
      return res
        .status(messages.status.internalServerError)
        .json(messages.messages.carNotAdded)
    }
  }
}

const buyCar = async (req, res) => {
  try {
    const iCarId = await Car.findOne({ sModel: req.body.sCar }, { _id: 1 })
    // console.log(iCarId, 'Car')

      req.body.sCar = iCarId._id
      console.log(req.body)
      const oBuyCar = await new Transaction(req.body).save()
      
      res.status(messages.status.statusSuccess).json({
        oSellDetails: oBuyCar,
        message: messages.messages.successToBuyCar,
      })
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.carNotAdded)
  }
}

module.exports = { addBuyer, buyCar }
