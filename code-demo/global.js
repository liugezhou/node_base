// 在Node.js中，你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文

// process：描述当前Node.js进程状态的对象
// process.argv是命令行参数数组，第一个元素是node，第二个元素是脚步文件名，从第三个元素开始每个元素是一个运行参数。

// process.stdout.write()函数为console.log()函数提供了更低层的接口
// process.nextTick(callback)的功能是为事件循环设置一项任务，Node.js会在下次事件循环调响应时调用callback

console.log('-----process-----')
console.log(process.argv)
functiondoSomething('somethingComplicated',callback);
doSomething();
function functiondoSomething(args, callback){
    somethingComplicated(args); 
    // callback();
   process.nextTick(callback); 
 } 
 function doSomething (){ 
   compute(); 
 }; 

 function somethingComplicated(val){
     console.log(val);
 }
 function compute(){
     console.log('compute');
 }
 function callback(){
     console.log('callback')
 }

 process.nextTick(()=>{
    console.log('-----console-----')
    console.log('我出生与%d，快三十了。','1993')
 })

