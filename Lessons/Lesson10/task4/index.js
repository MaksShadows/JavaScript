const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const absoluteValues = arr.map(num => Math.abs(num));
  return Math.max(...absoluteValues);
};