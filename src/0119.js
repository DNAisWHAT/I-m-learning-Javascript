function Constructor(name) {
    this.name = name;
}

const constructor1 = new Constructor('seongmin');
console.log(constructor1.__proto__);
console.log(Constructor.prototype);

 