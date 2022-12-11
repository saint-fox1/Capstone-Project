import questionsJSON from "../data/questions.json" assert { type: "json" };
import express from "express";
const router = express.Router();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

router.get("/", function (req, res) {
  const category = req.query.category;
  const relevantQuestions = questionsJSON.filter(
    (question) => question.category === category
  );
  let result = [];
  while (result.length < 4) {
    const index = getRandomInt(relevantQuestions.length - 1);
    result.push(relevantQuestions[index]);
    relevantQuestions.splice(index, 1);
    console.log(result);
  }
  res.send(result);
});

export default router;
