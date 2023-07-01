
const fs = require("fs");
const express = require("express");

const app = express();
const date= new Date();
const dotenv= require("dotenv").config();

const PORT=process.env.PORT || 3000;

//date
let DATE = ("0" + date.getDate()).slice(-2);

// current month
let month = ("0" + (date.getMonth() + 1)).slice(-2);

let ms = Date.now();


let s=(Math.floor(ms/1000));

app.get("/createtimestamp",function(req,res){
    fs.writeFile(`./${DATE}-${month}-${date.getFullYear()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`,`Date:${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} 
    timestamp : ${ms}ms or ${s}secs`,(err)=>{
        if(err) throw err;
        console.log("File not created");
    })
    res.json("file-created")
})

app.listen(PORT,()=>{
    console.log("server started")
});