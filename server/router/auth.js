const express=require('express');
const MongoClient = require("mongodb"); 
const router=express.Router();
const cors=require('cors')
router.get('/',(req,res)=>{
    res.send(`Hello world from server auth`)
    
})
require('../db/conn')
router.get('/seeall',(req,res) => {
    res.json();
})

const url =  "mongodb+srv://user:user@cluster0.rbgkhjy.mongodb.net/?retryWrites=true&w=majority"
const databasename = "Rohit";
const db=require('../db/conn'); 

router.post('/add',(req,res)=>{
    const data=req.body;
    console.log(data + "backend");
    MongoClient.connect(url).then((client) => { 

        const connect = client.db(databasename); 
        const collection = connect.collection("whatsapp"); 
    
        collection.insertOne({"name": req.body.name, "message": req.body.message }); 
        console.log("Insertion Successful") 
    
    })

    res.json({message:req.body});
})
module.exports = router;