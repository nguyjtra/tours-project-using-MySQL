import { Express } from "express";
import { tourRouter } from "./tour.route";
import{categoryRouter} from "./category.route"
export const routerClient = (app:Express)=>{
    app.use('/tours', tourRouter)
    app.use('/categories',categoryRouter)
}