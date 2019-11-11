const splitString = (str, len = 10) => {
    
  if (typeof str !== 'string') return null;

  const resultArray = [];
  let startPosition = 0;

  while (true) {
      let chank = str.substr(startPosition, len);
      if (chank.length === 0) break;
      if (chank.length < len) {
          chank = chank + '.'.repeat(len - chank.length);
      }
      resultArray.push(chank);
      startPosition += len;
  }

  return resultArray;
}
