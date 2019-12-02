function sumOfSquares(...args) {
  return args.reduce((acc, el) => {
      return acc += el**2;
  }, 0);
}

export {
  sumOfSquares
};
