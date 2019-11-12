const cleanTransactionsList = arr => {
  return arr.filter(i => typeof + i === 'number').map(i => '$' + (+i).toFixed(2));
}