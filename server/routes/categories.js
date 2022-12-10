import categoriesJSON from "../data/categories.json" assert { type: "json" };
import express from "express";
const router = express.Router();

router.get('/', function (req, res){
    res.send(categoriesJSON)
})

export default router;