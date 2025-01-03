import express ,{Express,Response,Request  } from "express";
import dotenv from 'dotenv';
dotenv.config();
import  sequelize  from './config/database';
const app=express();
const port = process.env.PORT ;
app.set('views','./views');
app.set('view engine', 'pug');
sequelize
app.get('/tours',(req:Request,res:Response)=>{
    res.render('client/pages/tours/index')
})
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})