// 每个子进程总是带三个流对象：child.stain,child.stdout,stderr.
// Node提供流child_process模块来创建子进程。方法有：    
//      exec - child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数的形式返回。   
//      spawn - child_process.spawn使用指定的命令行参数创建新进程。
//      fork - child_process.fork是spawn()的特殊形式。