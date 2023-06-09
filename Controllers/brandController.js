const messages = require('../Messages')
const Brand = require('../Schemas/brandSchema')

////////////////////////////////* Add Brand *//////////////////////////////////
const addBrand = async (req, res) => {
  try {
    const { sBrand, sCountryOfOrigin } = req.body

    const oBrand = new Brand()
    oBrand.sBrand = sBrand
    oBrand.sCountryOfOrigin = sCountryOfOrigin
    oBrand.sModels = []
    await oBrand.save()
    return res.status(messages.status.statusSuccess).json({
      oCar: oBrand,
      message: messages.messages.carBrandAdded.message,
    })
  } catch (error) {
    console.log(error)
    console.log(error.code)
    if (error.code === 11000) {
      return res
        .status(messages.status.internalServerError)
        .json(messages.messages.duplicateBrand)
    } else {
      return res
        .status(messages.status.internalServerError)
        .json(messages.messages.carBrandNotAdded)
    }
  }
}

/////////////////////////////////* Get Brands *////////////////////////////////
const getBrands = async (req, res) => {
  try {
    const aBrands = await Brand.find()
    return res.status(messages.status.statusSuccess).json(aBrands)
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.brandFetchingError)
  }
}
/////////////////////////////* Add Car into Brands *///////////////////////////
// router.put('/brand/:brandId', async (req, res) => {
//   try {
//     const oUpdatedBrand = await Brand.findByIdAndUpdate(
//       { _id: req.params.brandId },
//       { $push: { sModels: req.body.sCarId } }
//     )
//     return res.status(messages.status.statusSuccess).json(oUpdatedBrand)
//   } catch (error) {
//     console.log(error)
//     return res
//       .status(messages.status.internalServerError)
//       .json(messages.messages.brandFetchingError)
//   }
// })

module.exports = { addBrand, getBrands }
