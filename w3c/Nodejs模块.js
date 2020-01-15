// 在Node.js中有三种的模块：核心模块、文件模块和node_module。
// 模块之间共享状态
// 解析模块路径：require.resolve()函数--它返回模块的路径。
var os = require("os"); 
var gigaByte = 1 / (Math.pow(1024, 3)); 
console.log("Total Memory", os.totalmem() * gigaByte, "GBs"); 
console.log("Available Memory", os.freemem() * gigaByte, "GBs"); 
console.log("Percent consumed", 100 * (1 - os.freemem() / os.totalmem())); 

console.log("This machine has", os.cpus().length, "CPUs"); 

// 最小的package.json文件
// {
//     "name": "package-name",
//     "version": "1.0.0"
// }