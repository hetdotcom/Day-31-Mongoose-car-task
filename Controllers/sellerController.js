const messages = require('../Messages')
const Car = require('../Schemas/carSchema')
const Seller = require('../Schemas/sellerSchema')

const addSeller = async (req, res) => {
  try {
    const { aCarStock } = req.body
    console.log(aCarStock)

    const iCarId = await Car.find({ _id: aCarStock }, { _id: 1 })
    console.log(iCarId)

    req.body.aCarStock = iCarId
    console.log(req.body)

    // const oSeller = await Seller.create(req.body)
    const oSeller = await new Seller(req.body).save()

    return await res
      .status(messages.status.statusSuccess)
      .send({
        oSeller: oSeller,
        message: messages.messages.sellerAdded.sMessage,
      })
  } catch (error) {
    console.log(error)
    // console.log(error.code))
    if (error.code === 11000) {
      return res
        .status(messages.status.internalServerError)
        .json(messages.messages.duplicateSeller)
    } else {
      return res
        .status(messages.status.internalServerError)
        .json(messages.messages.carNotAdded)
    }
  }
}



module.exports = { addSeller }
