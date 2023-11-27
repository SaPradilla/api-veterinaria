const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
require('dotenv').config()
const Routes = require('./routes/index')

const Port = process.env.PORT 
const cors = require('cors');    
const cookieParser = require('cookie-parser');


app.use(cors());
//Server
app.listen(Port, function(){
    console.log(`Conectado a localhost:${Port}`)
})
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',Routes)



