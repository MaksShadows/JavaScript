
export default arr => {

  if (arr.length == 0 || !Array.isArray(arr)) return null;
  const arrAbs = arr.map(i => Math.abs(i)).sort((a, b) => a - b);

  return Math.pow(arrAbs[0], 2);
};
