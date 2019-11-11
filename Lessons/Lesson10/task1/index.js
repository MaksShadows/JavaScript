const getFiniteNumbers = array => array.filter(arg => Number.isFinite(arg));

const getFiniteNumbersV2 = array => array.filter(arg => isFinite(arg));

const getNaN = array => array.filter(arg => Number.isNaN(arg));

const getNaNV2 = array => array.filter(arg => isNaN(arg));

 
