const getTotalPrice = arr => {

  return '$' + Math.floor(arr.reduce((a, b) => a + b) * 100) / 100;
}