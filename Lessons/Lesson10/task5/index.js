const getTotalPrice = arr => {
  return Math.floor(arr((a, b) => a + b) * 100) / 100;
}