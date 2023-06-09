const messages = {
  healthCheckPass: { sMessage: 'Pong' },
  healthCheckFail: { sMessage: 'Health check failed!!' },

  carAdded: { sMessage: 'Car added successfully!!' },
  carNotAdded: { sMessage: 'Car not added, Internal Server Error' },
  duplicateCar: { sMessage: 'This car is already present in database!!' },

  sellerAdded: { sMessage: 'seller added successfully!!' },
  sellerNotAdded: { sMessage: 'seller not added, Internal Server Error' },
  duplicateSeller: { sMessage: 'This seller is already present in database!!' },

  carBrandAdded: { sMessage: 'Car brand added successfully!!' },
  carBrandNotAdded: { sMessage: 'Brand not added, Internal Server Error' },
  duplicateBrand: { sMessage: 'This brand is already present in database!!' },

  buyerAdded: { sMessage: 'Buyer added successfully!!' },
  buyerNotAdded: { sMessage: 'buyer not added, Internal Server Error' },
  duplicateBuyer: { sMessage: 'This buyer is already present in database!!' },

  carFetchingError: { sMessage: 'Error in fetching Cars!!' },
  brandFetchingError: { sMessage: 'Error in fetching Brands!!' },
  sellerFetchingError: { sMessage: 'Error in fetching Sellers!!' },

  successToBuyCar: { sMessage: 'car sell successfully!!' },
  failedToBuyCar: { sMessage: 'failed to buy car!!' },
  sellerNotMatched: { sMessage: "This seller dosen't have this car!!" },

  failedToCountCar: { sMessage: 'Failed to count the cars!!' },
  failedToFindTopCity: { sMessage: 'Failed to find the top city!!' },
  failedToFetchTopSoldCar: { sMessage: 'Failed to fetch top sold car!!' },
  failedToFetchTopSoldBrand: { sMessage: 'Failed to fetch top sold car brand!!' },

  notFound: { sMessage: 'Data not found, Enter valid URL!!' },
}

module.exports = messages
