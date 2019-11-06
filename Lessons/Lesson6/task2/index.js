function getSum(arr) {
  if (!Array.isArray(arr)) return null;
  let result = 0;
  for (const item of arr) {
      result += item;
  }
  return result;
}
