const getFiniteNumbers = array => array.filter(arr => Number.isFinite(arr));

const getFiniteNumbersV2 = array => array.filter(arr => isFinite(arr));

const getNaN = array => array.filter(arr => Number.isNaN(arr));

const getNaNV2 = array => array.filter(arr => isNaN(arr));

 console.log(getFiniteNumbers(arr));
 console.log(getFiniteNumbersV2(arr));
 console.log(getNaN(arr));
 console.log(getNaNV2(arr));
 console.log(getIntegers(arr));
