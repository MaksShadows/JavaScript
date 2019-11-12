const cleanTransactionsList = arr => {
  return arr.filter(i => typeof + i === 'number' && !isNaN(i)).map(i => '$' + (+i).toFixed(2));
}