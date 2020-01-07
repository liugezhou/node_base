var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1993;
    this.sayHello = function () {
        console.log('Hello ',this.name);
    }
}

Base.prototype.showName = function() {
    console.log(this.name)
    console.log(this.base)
}

function Sub() {
    this.name = 'Sub';
    // this.base = 1990;
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase)
console.log(util.inspect(objBase,true,null,true))

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub)

// Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承