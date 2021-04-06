let Animal = function(name, food) {
    this.name = name;
    this.food = food;
}
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating ${this.food}`);
}
let Cat = function(name, food) {
    Animal.call(this, name, food);
}
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.food = function() {}
var tom = new Cat('Tom', 'cheese');
var jery = new Cat('Jery', 'fish');

tom.eat();
jery.eat();