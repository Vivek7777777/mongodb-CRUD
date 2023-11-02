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

// async function run(){
//     // const user = new User({name: "John", age: 18 })
//     // await user.save()

//     const user = await User.create({name: "John", age: 19});
//     // update name
//     user.name = "Wick"
//     await user.save()

//     console.log("Data inserted" + user);
// }


// create user in new schema

// async function run(){
//     try{
//         const user = await User.create({
//             name: "Jaddu",
//             age: 22,
//             email: "test@gmail.com",
//             hobbies: ["reading", "cooking"],
//             address: {
//                 street: "Main street"
//             }
//         });
//         console.log(user);
//     }
//     catch(err){
//         // console.log(err);
//         console.log(err.message);
//     }
// }

// run()

//updateOne and updateMany methods don't go though validation so prefer using findById methods

// console.log(User.findById());

// async function UPdate() {
//     try{
//         // const user = await User.findById("6540f6caedce448080e2eb30");

//         // find() is same as mongodb
//         // const user = await User.find({name: "Sam"});

//         // READ using where method
//         // const user = await User.where("name").equals("Sam");
//         // const user = await User.where("age").gt(15);
//         // const user = await User.where("age").gt(15).where("name").equals("Wick");
//         // const user = await User.where("age").gt(15).where("name").equals("Sam").limit(2);
//         // const user = await User.where("age").gt(15).where("name").equals("Sam").select("age");
//         const user = await User.where("name").equals("Sam").populate("bestFriend");

//         // user[0].bestFriend = "6540fc0149d43b71883b4705";
//         // await user[0].save();
        
//         // deleteOne is used to delete only one tuple but deleteMany will delete all the required tuples
//         // const user = await User.deleteOne({name: "Sam"});

//         console.log(user);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

// UPdate();



//METHOD TESTING
async function runn(){
    try{
        // const user = await User.find({name: "Jaddu"});

    //using findByName static method defined in user.js file
        // const user = await User.findByName("Jaddu");

    //using byName query method defined in user.js file
        const user = await User.find().byName("Jaddu");
    
    //using virtual function
        console.log(user[0].namedEmail);

        console.log(user);
        user[0].sayy();
    }
    catch(err){
        console.log(err.message);
    }
}

runn();