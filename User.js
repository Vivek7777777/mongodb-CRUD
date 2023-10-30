import mongoose from "mongoose";
// const mongoose = require("mongoose")


//1.2
//create schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

//create model
const User = mongoose.model("User", userSchema)


export default User;