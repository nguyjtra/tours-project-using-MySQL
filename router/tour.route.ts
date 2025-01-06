import express from "express";
const router=express.Router();
import * as controller from "../controllers/client/tour.controller"

router.get('/:slug',controller.index)

router.get('/detail/:slug',controller.detail)

export const tourRouter=router;