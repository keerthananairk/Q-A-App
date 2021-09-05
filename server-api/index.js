const express = require('express');
const mysql= require('mysql');
const {default: questions } = require('../src/api/questions');





const app = express();
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"Localhost",
    password: "password",
    database: "qanda_app",
});


app.post('/questions',(req,res)=>{



    db.query("INSERT INTO qanda,(Number,Author,Question)VALUES(?,?,?)"[questions],
    (err,results)=>{
        console.log(err);
    })
})




app.listen(3005,()=>{
    console.log("running server");
});

