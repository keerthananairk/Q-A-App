

const express=require ('express');
const app=express();
const mysql=require('mysql');

const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const session=require('express-session')


const bcrypt=require('bcrypt')
const saltRounds=10

const jwt=require('jsonwebtoken')
app.use(express.json());
const cors=require('cors');

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key:"userId",
    secret:"welcome",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,

    }
}))

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    passsword:"password",
    database:"loginsystem"
});

app.post('/register', (req,res)=>{
    
    const username =req.body.username
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const email=req.body.email
    const password=req.body.password
    bcrypt.hash(password,saltRounds,(err,hash)=>{

        if(err){
            console.log(err)
        }
        
        db.query("INSERT INTO users(username,firstname,lastname,email,password)VALUES(?,?,?,?,?)",
        [username,firstname,lastname,email,hash],(err,result)=>{
            console.log(err);
        }
        );
        })

    })
        


const verifyJWT=(req,res,next)=>{
    const token=req.headers["x-access-token"]
    if(!token){
        res.send("we need a token")
    }else{
        jwt.verify(token,"jwtSecret",(err,decoded)=>{
            if(err){
                res.json({auth: false, message: "failed to authenticate"})
            }else{
                req.userUsername=decoded.username;
                next();
            }
        })
    }
}



app.get('/userAuth', verifyJWT, (req,res)=>{
    res.send("you are authenticated")
})





  
app.get('/login', (req,res)=>{
    if(req.session.user){
        res.send({loggedIn:true,user:req.session.user});
    }else{
        res.send({loggedIn:false})
    }
    
})






app.post('/login',(req,res)=>{
     
    const username =req.body.username
    const password=req.body.password  



    db.query("SELECT * FROM users WHERE username=?; ",username,(err,result)=>{
        if(err){
        res.send({err:err});
        } 


            if(result.length > 0){
                bcrypt.compare(password,result[0].password,(err,response)=>{
                    if(response){
                        
                     
                        const username=result[0].username
                        const token=jwt.sign({username},"jwtSecret",{
                            expiresIn:300,
                        })
                        req.session.user=result;

                        res.json({auth:true, token:token,result:result})
                    }else{
                        res.json({auth:false, message:"wrong username/password"})
                    }
                })
            }else{
                res.json({auth:false, message:"no user exist"})
            }
               
            }
        
    );
})

app.listen(7007,(req,res)=>{
    console.log("server running")
})
