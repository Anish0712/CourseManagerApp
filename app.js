const express = require('express');
const route = require('./router/route');
const cors = require('cors');
const { connectDb } = require('./db');
connectDb()

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/course',route)

app.listen(4000,()=>{
    console.log("running...")
})