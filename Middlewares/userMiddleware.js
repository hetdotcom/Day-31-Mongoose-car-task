const messages = require('../Messages')
const Car = require('../Schemas/carSchema')
const User = require('../Schemas/userSchema')
const Seller = require('../Schemas/sellerSchema')

const verifyCity = async (req, res, next) => {
  try {
    const oSeller = await Seller.findOne(
      { _id: req.body.sSeller },
      { _id: 1, sCity: 1 }
    )
    // console.log(oSellerId, 'Seller')

    const oUser = await User.findOne(
      { _id: req.body.sBuyer },
      { _id: 1, sCity: 1 }
    )
    // console.log(oUserId, 'User')

    if (oSeller.sCity == oUser.sCity) {
      req.body.sBuyer = oUser._id
      req.body.sSeller = oSeller._id
      req.body.sCity = oUser.sCity
      next()
    } else {
      res
        .status(messages.status.badrequest)
        .json(messages.messages.failedToBuyCar)
    }
  } catch (error) {
    console.log(error)
  }
}

const isCarPresent = async (req, res, next) => {
  try {
    const iCarId = await Car.findOne({ _id: req.body.sCar }, { _id: 1 })

    const oSeller = await Seller.findOne({ _id: req.body.sSeller })
    // console.log(oSeller)
    if (oSeller.aCarStock.includes(iCarId._id)) {
      next()
    } else {
      res
        .status(messages.status.badrequest)
        .json(messages.messages.sellerNotMatched)
    }
  } catch (error) {
    console.log(error)
    res
      .status(messages.status.internalServerError)
      .json(messages.messages.failedToBuyCar)
  }
} 
module.exports = { verifyCity, isCarPresent }
