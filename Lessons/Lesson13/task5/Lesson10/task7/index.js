export const superRound = (num, drop) => {
  const sum = Math.pow(10, drop);
  return [
      Math.floor(num * sum) / sum,
      Math.round(num * sum) / sum,
      Math.ceil(num * sum) / sum,
      Math.trunc(num * sum) / sum,
      +num.toFixed(drop),
  ];
}
