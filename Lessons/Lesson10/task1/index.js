const getFiniteNumbers = array => array.filter(a => Number.isFinite(a));
const getFiniteNumbersV2 = array => array.filter(a => isFinite(a));
const getNaN = array => array.filter(a => Number.isNaN(a));
const getNaNV2 = array => array.filter(a => isNaN(a));
const getIntegers = array => array.filter(a => Number.isInteger(a));

 
