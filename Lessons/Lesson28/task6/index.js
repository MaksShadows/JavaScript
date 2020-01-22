export const maxFibonacci = (num) => {
  let a = 1;
  let b = 1;
  for (let i = 0; i <= num; i++) {
      let c = a + b;
      a = second;
      b = c;
  }
  return b;
}