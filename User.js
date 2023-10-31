import mongoose, { mongo } from "mongoose";
// const mongoose = require("mongoose")


//1.2
//create schema

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
});

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 1000,
        validate: {
            //age should always be even
            validator: v => v%2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    // email: String,
    email: {
        type: String,
        minlength: 10,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    // represent another user
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema
    // address: {
    //     street: String,
    //     city: String
    // }
});



//create model
const User = mongoose.model("User", userSchema)


export default User;