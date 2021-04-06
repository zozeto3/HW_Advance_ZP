function carFactory(speed) {
    let car = {};
    car.speed = speed;


    car.__proto__ = carFactory.prototype;

    return car;
};
carFactory.prototype.drive = function() {
    console.log(`Drinving with ${this.speed}km/h`);
}

var ford = carFactory(200);
var bmw = carFactory(300);



ford.drive();
bmw.drive();