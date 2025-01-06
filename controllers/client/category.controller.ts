import { Request,Response } from "express";
import  Tour  from "../../models/tour.model";
import Category from "../../models/category.model"
export const index=async(req:Request,res:Response)=>{
    
    const category=await Category.findAll({
        where:{
            deleted:false,
            status:"active"
        },
        raw:true
    })

    res.render('client/pages/category/index',{
        pageTitle:"category page",
        categories:category
    })
}