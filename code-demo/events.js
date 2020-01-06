var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {
    console.log('some_event occured.');
})

setTimeout(() => {
    event.emit('some_event')
}, 1000);

// 运行这个文件，1s后控制台打印输出。 
// 原理是event对象注册了事件 some_event的一个监听器，通过emit发送事件 some_event，这时候会调用some_event监听器。
// events对象只提供了一个EventEmitter对象。EventEmitter的核心就是 事件发射与事件监听器功能的封装