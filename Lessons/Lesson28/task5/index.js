function shmoment(date) {
  let result = new Date(date);

  const dateChange = {
    
  add(value){
    return this
  },
  subtract(value){
    return this
  },
  result() {
    return result
  }
  }
   return    dateChange 
};

// console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result())
export { shmoment };