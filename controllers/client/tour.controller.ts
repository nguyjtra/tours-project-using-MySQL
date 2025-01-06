
import { Request,Response } from "express";
import { QueryTypes } from "sequelize";
import sequelize from "../../config/database";
import Tour from "../../models/tour.model";

export const index=async(req:Request,res:Response)=>{
    const tours=await sequelize.query(`
        SELECT tours.*, ROUND(price * (1 - discount/100))AS price_special
        FROM tours
        JOIN tours_categories ON tours.id = tours_categories.tour_id
        JOIN categories ON tours_categories.category_id = categories.id
        WHERE
          categories.slug = '${req.params.slug}'
          AND categories.deleted = false
          AND categories.status = 'active'
          AND tours.deleted = false
          AND tours.status = 'active';
      `, {
        type: QueryTypes.SELECT,
      });
      for (const item of tours) {
        if(item["images"]) {
          const arrayImage = JSON.parse(item["images"]);
          if(arrayImage.length > 0) {
            item["image"] = arrayImage[0];
          }
        }
        item["price_special"] = parseInt(item["price_special"]);
      }
    res.render('client/pages/tours/index',{
        pageTitle:"Tour page",
        tours:tours
    })
   
}
export const detail=async(req:Request,res:Response)=>{

  const slug=req.params.slug;

  const detail=await Tour.findOne({
    where:{
      slug:slug,
      deleted:false,
      status: "active"
    },
    raw:true
  })

  if(detail['images']){
    detail['images']=JSON.parse(detail['images'])
  }
  detail['price_special']=((1-detail['discount']/100)*detail['price'])
  detail['price_special']=parseInt( detail['price_special']);
  res.render('client/pages/detail/index',{
    pageTitle:"Details",
    tour:detail
  })
  
}