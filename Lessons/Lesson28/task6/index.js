function fibonacci(num) {
  if (num < 1) {
      return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
export function maxFibonacci(input) {
  let index = 0;

  let maxFib = 0;
  while (true) {
      let fib = fibonacci(index);
      if (fib <= input) {
          maxFib = fib;
          index++;
      } else {
          return maxFib;
      }
  }
}