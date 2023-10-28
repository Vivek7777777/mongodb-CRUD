import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(port, ()=>{
    console.log("Server is live at port " + port);
})