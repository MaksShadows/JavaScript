function bind(func, context, ...args) {
  return function(...fnArgs) {
      return func.call(context, ...args, ...fnArgs);
    };
}

export { bind };
