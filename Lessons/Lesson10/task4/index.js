const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length == 0) {
      return null;
  }

  const absoluteValues = arr.map(num => Math.abs(num));

  const max = Math.max(...absoluteValues);

  return max;
}