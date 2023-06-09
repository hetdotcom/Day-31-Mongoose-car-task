// const Car = require('../Schemas/carSchema')
// const Brand = require('../Schemas/brandSchema')
const Transaction = require('../Schemas/transactionSchema')
const messages = require('../Messages')

const totalSoldCar = async (_, res) => {
  try {
    const total_sold_car = await Transaction.find().count()

    return res.status(messages.status.statusSuccess).json({
      oTotalSoldCar: total_sold_car,
    })
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.failedToCountCar)
  }
}

const topCity = async (_, res) => {
  try {
    const oTopCity = await Transaction.aggregate([
      {
        $group: {
          _id: '$sCity',
          car_per_city: { $sum: 1 },
        },
      },
    ])
    console.log(oTopCity)
    return res.status(messages.status.statusSuccess).json(oTopCity)
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.failedToFindTopCity)
  }
}

const mostSoldCar = async (_, res) => {
  try {
    const oTopSoldCar = await Transaction.aggregate([
      {
        $lookup: {
          from: 'cars',
          localField: 'sCar',
          foreignField: '_id',
          as: 'aCars',
          pipeline: [{ $project: { sModel: 1 } }],
        },
      },
      { $group: { _id: '$aCars.sModel', car_per_city: { $sum: 1 } } },
      { $sort: { car_per_city: -1 } },
      { $limit: 1 },
    ])
    return res.status(messages.status.statusSuccess).json(oTopSoldCar)
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.failedToFetchTopSoldCar)
  }
}

const mostSoldCarBrand = async (_, res) => {
  try {
    const oTopBrand = await Transaction.aggregate([
      {
        $lookup: {
          from: 'cars',
          localField: 'sCar',
          foreignField: '_id',
          as: 'aCarData',
          pipeline: [
            {
              $project: {
                oBrand: 1,
                _id: 0,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: 'brands',
          localField: 'aCarData.oBrand',
          foreignField: '_id',
          as: 'sModel',
          pipeline: [
            {
              $project: {
                sBrand: 1,
                _id: 0,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: '$sModel',
        },
      },
      {
        $group: {
          _id: '$sModel.sBrand',
          car_count: {
            $sum: 1,
          },
        },
      },

      { $sort: { car_count: -1 } },
      { $limit: 1 },
    ])
    return res.status(messages.status.statusSuccess).json(oTopBrand)
  } catch (error) {
    console.log(error)
    return res
      .status(messages.status.internalServerError)
      .json(messages.messages.failedToFetchTopSoldBrand)
  }
}

module.exports = { totalSoldCar, topCity, mostSoldCar, mostSoldCarBrand }
