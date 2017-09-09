function Person() {
}

Person.prototype.setName = function (name) {
    this.name = name;
};
Person.prototype.setAge = function (age) {
    this.age = age;
};
Person.prototype.getName = function () {
    return this.name;
};
Person.prototype.getAge = function () {
    return this.age;
};