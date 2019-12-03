class Wallet {
  _balance = 0;

  getBalance() {
      return this._balance;
  }

  deposit(value) {
      this._balance += value;
  }

  withdraw(value) {
      if(value > this._balance) {
          console.log('No enough funds');
          return;
      }
      this._balance -= value;
  }
};

export {
  Wallet
};
