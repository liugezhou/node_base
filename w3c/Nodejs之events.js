var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on("foo", function(arg1, arg2){
    console.log("Foo raised,Args:", arg1, arg2);
})

emitter.emit("foo",{a: 123}, {b:456});

// 全局异常处理程序
process.on("uncaughtException", function(err){
    console.log("Caught exception: ", err);
    console.log("Stack:", err.stack); 
    process.exit(1); 
})