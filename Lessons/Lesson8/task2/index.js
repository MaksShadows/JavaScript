const concatProps = obj => {
  let arr = [];

  for (let key in obj) {
      arr.push(obj[key]);
  }
  return arr;
}
