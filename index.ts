import express ,{Express,Response,Request  } from "express";
import dotenv from 'dotenv';
dotenv.config();
import  sequelize  from './config/database';
const app=express();
const port = process.env.PORT ;
app.set('views','./views');
app.set('view engine', 'pug');
sequelize

app.use(express.static("public"));
import { routerClient } from "./router/index.route";
import Tour from "./models/tour.model";

routerClient(app)
// app.get('/tours',async(req:Request,res:Response)=>{

//     // SELECT * FROM tours WHERE deleted=false AND status="active";

//     const tours=await Tour.findAll({
//         where:{
//             deleted:false,
//             status:"active"
//         },
//         raw:true
//     })

//     res.render('client/pages/tours/index',{
//         pageTitle:"Tour page",
//         tours:tours
//     })
// })


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})