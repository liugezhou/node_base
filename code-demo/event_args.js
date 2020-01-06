var events = require('events').EventEmitter;

var emitter = new events();

emitter.on('activated',(arg1,arg2) => {
    console.log('listner1',arg1,arg2)
})

emitter.on('activated',(arg1,arg2) => {
    console.log('listner12',arg1,arg2)
})

emitter.emit('activated','hello','nodejs')