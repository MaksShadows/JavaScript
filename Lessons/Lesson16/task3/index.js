function createArrayOfFunctions(num) {

  if (num === undefined) return [];
  if (typeof num !== 'number') return null;
  
  const arr = [];

  for (let i = 0; i < num; i++) {
      arr[i] = function() {
          return i;
      }
  }

  return arr;
}

export { createArrayOfFunctions };