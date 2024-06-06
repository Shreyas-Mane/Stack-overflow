import express, { json, request, response } from 'express'
import mongoose from  'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';

import userRoutes from './routes/users.js'
import QuestionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app=express();
dotenv.config();
app.use(express.json({limit: "30mb", extended:true}))
//    getting response to the request which has limit and we can extend it too 
app.use(express.urlencoded({limit:"30mb", extended:true}))

const corsOptions = {
    origin: process.env.FRONTEND_URL, // Front-end URL from environment variable
    optionsSuccessStatus: 200
}   
app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})

app.use('/user',userRoutes)
app.use('/Questions',QuestionRoutes)
app.use('/answer',answerRoutes)

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.CONNECTION_URL 


mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))