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
        // immutable: true,
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
},

//add methods to schema

// {
//     methods: {
//         sayy(){
//             let greeting = "Hello, my name is " + this.name;
//             console.log(greeting);
//            // return greeting;
//         }
//     }
// }

);


//add methods to schema

userSchema.methods.sayy = function() {
  var greeting = "Hello, my name is " + this.name;
  console.log(greeting);
}


// add static method

userSchema.statics.findByName =  function (name){
    return this.find({ name: new RegExp(name, "i")});
}

// add query method

userSchema.query.byName = function (name){
    return this.where({name: new RegExp(name, "i")});
}

// VIRTUAL METHODS ARE NOT SAVED IN DATABASE THEY ARE ONLY USED LOCALLY

userSchema.virtual("namedEmail").get(
    function(){
        return `${this.name} <${this.email}>`
    }
)


//middleware
//executes before save operation
userSchema.pre("save", function(next){
    this.updatedAt = Date.now();
    next();  //continue executing next process  
})

//executes after save operation
userSchema.post("save", function(doc, next){
    doc.sayy();
    next();
})




//create model
const User = mongoose.model("User", userSchema)


export default User;