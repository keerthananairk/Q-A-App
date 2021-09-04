const express=require('express')
const mysql=require("mysql");

const app=express();
app.use(express.json());


const db=mysql.createConnection({
    user :"root",
    host:"localhost",
    password:"password",
    database:"questionandanswer",

});

app.post('/questions',(req,res)=>{

    const number=req.body.number
    const author=req.body.author
    const question=req.body.question
    db.query(
        "INSERT INTO questionandanswer(Number,Author,Text ) VALUES(?,?,?)",
    [number,author,question],
    (err,results)=>{
        console.log(err);
    }
    )
});


app.listen(3005,(req,res)=>{
    console.log("server running")
})