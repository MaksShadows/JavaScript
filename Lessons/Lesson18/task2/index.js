  
const wallet = {
  transactions: [100, 200, 300],
  getMax() {
      return Math.max(...this.transactions);
  },
  getMin() {
      return Math.min(...this.transactions);
  },
};

export { wallet };
