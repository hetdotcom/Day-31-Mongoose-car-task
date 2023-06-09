const messages = require('../Messages')
const Car = require('../Schemas/carSchema')
const Brand = require('../Schemas/brandSchema')

//////////////////////////////////* Add Car *//////////////////////////////////
const addCar = async (req, res) => {
  try {
    const iBrandId = await Brand.findOne(
      { sBrand: req.body.oBrand },
      { _id: 1 }
      )
    // console.log(iBrandId)
    req.body.oBrand = iBrandId._id
    const oCar = await new Car(req.body).save()
    console.log('oCar', oCar)
    
    return res
    .status(messages.status.statusSuccess)
      .json({ oCar: oCar, message: messages.messages.carAdded.message })
  } catch (error) {
    console.log(error)
    // console.log(error.code))
    if (error.code === 11000) {
      return res
      .status(messages.status.internalServerError)
      .json(messages.messages.duplicateCar)
    } else {
      return res
      .status(messages.status.internalServerError)
      .json(messages.messages.carNotAdded)
    }
  }
}

//////////////////////////////////* Get Car *//////////////////////////////////
const getCars = async (_, res) => {
  try {
    const aCar = await Car.find()
    return res.status(messages.status.statusSuccess).json(aCar)
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.carFetchingError)
  }
}

module.exports = { addCar, getCars }
