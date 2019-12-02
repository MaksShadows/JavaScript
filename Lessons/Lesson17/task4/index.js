const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
      return this.firstName + ' ' + this.lastName;
  },
  setFullName(fullName) {
      this.firstName = fullName.split(' ');
      this.lastName = fullName.split(' ');
  }
};


export { user };