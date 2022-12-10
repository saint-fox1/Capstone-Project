import questionsJSON from "../data/questions.json" assert { type: "json" };
import express from "express";
const router = express.Router();

router.get('/', function (req, res){
    res.send(questionsJSON)
})

export default router;