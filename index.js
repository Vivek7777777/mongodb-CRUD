import mongoose from "mongoose";
import User from "./User.js";



// 1.1
//connecting with local database
mongoose.connect("mongodb://127.0.0.1:27017/crudDB", {useNewUrlParser: true, useUnifiedTopology: true}).then(db => console.log("connected to database")).catch(err => console.log(err));



// 1.3
// create new user

// const user = new User({name: "John", age: 18 })
// user.save().then(() => console.log("User saved"));
// console.log(user);

async function run(){
    // const user = new User({name: "John", age: 18 })
    // await user.save()

    const user = await User.create({name: "John", age: 19});
    // update name
    user.name = "Wick"
    await user.save()

    console.log("Data inserted" + user);
}

run()