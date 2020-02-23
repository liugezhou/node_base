const express = require('express');
const app = express();

app.get('/',(req,res)=>  {
    console.log(req.path)
    res.send('hello word!')
})

app.listen(3000,()=>console.log('Serveing running'))