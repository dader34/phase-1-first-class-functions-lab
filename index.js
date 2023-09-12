const returnFirstTwoDrivers = (arr) => [arr[0],arr[1]]
const returnLastTwoDrivers = (arr) => [arr[arr.length-2],arr[arr.length-1]]
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier = (mult) =>{
    return (fare) =>{
        return mult * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (arrayOfDrivers,callback) =>{
    return callback(arrayOfDrivers)
}