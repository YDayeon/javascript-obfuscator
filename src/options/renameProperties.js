// Original code:
const myObject = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  getAddress() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old`;
  },
};

console.log(myObject.getAddress());

// Obfuscated code with renameProperties option:
const _0x2b9c = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  getFullname: function () {
    return (
      this['name'] + ' ' + this['surname'] + ', ' + this['age'] + ' years old'
    );
  },
};

console['log'](_0x2b9c['getFullname']());
