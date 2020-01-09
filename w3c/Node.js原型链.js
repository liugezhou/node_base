
var util = require('util');
function Car(n){
    this.name = n;
}
Car.prototype.drive = function (destination){
    console.log(this.name,"can drive to ",destination);
}

function FlyingCar(name){
    Car.call(this,name);
}

util.inherits(FlyingCar,Car);
FlyingCar.prototype.fly = function(destination){
    console.log(this.name,"can fly to ",destination);
}

var bird = new FlyingCar("XXX");
bird.drive("NEW YOURK");
bird.fly("Seattle");

console.log(process.argv)
setTimeout(function () { 
    console.log("second passed"); 
}, 1000); 

try {
    const temp = require.resolve("demo1.js");
    console.log(temp)
} catch (error) {
    console.log('ERROR:'+error)
}
