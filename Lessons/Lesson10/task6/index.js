const getRandomNumbers = (length, from, to) => {
  const isWrongRange = to < from;
  const noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);

  if (isWrongRange || noNumbersBetween) return null;

  return Array(length)
  .fill().map(n => Math.floor(Math.random() * (to - from)) + from);
}