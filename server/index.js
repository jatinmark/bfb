// wduyw2UhTWskyJh6
import  express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';





const app = express()
app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:wduyw2UhTWskyJh6@cluster0.ulatc4z.mongodb.net/userDB?retryWrites=true&w=majority')

const db = mongoose.connection;


const userschema =  mongoose.Schema({
   Name : String ,
   Phone_number : Number ,
   Email: String,
   Hobbies : String
});

const User = mongoose.model('User',userschema);

db.once('open',() => {
   


app.get('/',(req,res) => res.send("hello"));

app.get('/data' , (req,res)=>{
 let messages =  User.find({},(err,users)=>{
  if(err){
    res.send(err);
  }
  return res.status(200).json(users);
 }) ;  
    
  });


app.post('/user' , (req,res)=>{
   const dbmessage = req.body
   User.create(dbmessage,(err,data) =>{
     if(err){
       res.send(err);
     }else {
      
       res.send(data);
     }
   })
});

console.log("db is connected");

});

app.listen(process.env.PORT || 4000, function() {
    console.log("Server started successfully");
  });