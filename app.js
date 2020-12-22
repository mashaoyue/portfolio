var express = require('express');
const path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.listen(8080, ()=>{
    console.log('running on port 8080!')
})