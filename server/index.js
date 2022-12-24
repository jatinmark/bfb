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

db.once('open',() => {
   console.log("db is connected");
});

app.get('/',(req,res) => res.send("hello"));






app.listen(process.env.PORT || 4000, function() {
    console.log("Server started successfully");
  });