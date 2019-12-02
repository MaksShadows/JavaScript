function spy(func) {
  fn.calls = [];
  function fn(...args) {
      fn.calls.push(args);
      return func.apply(this, args);
  }

  return fn;
}

export { spy };
