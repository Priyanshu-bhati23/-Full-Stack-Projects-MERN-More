const express=require("express")
const mongoose = require('mongoose');
const routes=require('./routes/ToDoRoutes.js')
const cors=require('cors')
require('dotenv').config()
const app=express()

const port=process.env.PORT||5000
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})

app.use(routes)

app.listen(port,()=>{
console.log(`Server is running oon port ${port}`)
})