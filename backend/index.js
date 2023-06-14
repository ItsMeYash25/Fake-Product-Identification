require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express()
const userRoutes = require("./routers/user")
const productRoutes = require("./routers/product")

app.use(express.json())
app.use("/api/user",userRoutes)
app.use("/api/product", productRoutes)

app.listen(4000,()=>{
    console.log("Server is Running on port 4000")
})

mongoose.connect(process.env.mongo_url)