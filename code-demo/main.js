// 引入 events 模块
var events = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

// 创建事件处理程序
var connectHandler = function connected() {
    console.log("连接成功");
    // 触发data_received 事件
    eventEmitter.emit('data_received');
}


// 绑定 connection事件处理程序
eventEmitter.on('data_received',function(){
    console.log('数据接收成功！');
})

// 触发connection
console.log('----connection 准备阶段-------')
eventEmitter.emit('connection');

console.log('程序执行完毕！')
