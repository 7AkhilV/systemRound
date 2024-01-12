require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const loginRoutes = require('./routes/login.routes')
const categoryRoutes = require('./routes/categories.routes')
const serviceRoutes = require('./routes/service.routes')

const app = express();

const PORT = 5000

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log('Database not connected' + err)
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use(express.json());

app.use(loginRoutes)
app.use(categoryRoutes)
app.use(serviceRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})