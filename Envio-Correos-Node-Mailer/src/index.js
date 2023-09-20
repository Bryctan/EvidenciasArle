const express = require('express')
const app = express()
const path = require('path')
const port = 10101

app.use(express.urlencoded({extended: false}));
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Server on port ${port}`);
})