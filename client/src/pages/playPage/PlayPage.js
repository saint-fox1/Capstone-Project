import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Button from "../../components/button/Button";
import "./PlayPage.scss";

const GAME_STATE = {
  INSTRUCTION_PROMPT: 0,
  QUESTION: 1,
  GAME_OVER: 2,
};

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function PlayPage() {
  const query = useQuery();
  const [page, setPage] = useState(GAME_STATE.INSTRUCTION_PROMPT);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState();
  const [time, setTime] = useState(30);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);

  const playerOne = query.get("player_one") || "Player 1";
  const playerTwo = query.get("player_two") || "Player 2";
  const category = query.get("category") || "corporate";

  useEffect(() => {
    if (page === GAME_STATE.QUESTION) {
      const interval = setInterval(() => setTime(time - 1), 1000);
      if (time === 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [page, time]);

  useEffect(() => {
    if (!questions) {
      axios
        .get(`http://localhost:8080/questions?category=${category}`)
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((e) => {
          console.error("The error:", e);
        });
    }
    console.log(questions);
  }, [questions]);

  if (!questions) {
    return "Loading";
  }

  return (
    <div className="play-page">
      <div className="play-page__prompt">
        {/* Prompt One  */}
        {page === GAME_STATE.INSTRUCTION_PROMPT && (
          <div>
            <h3 className="play-page__main-text-content">
              {isPlayerOneTurn ? playerOne : playerTwo}'s turn to talk
            </h3>
            <Button
              text="Ready!"
              onClick={() => {
                setPage(GAME_STATE.QUESTION);
                setTime(30);
                setIsPlayerOneTurn(!isPlayerOneTurn);
              }}
            ></Button>
          </div>
        )}
        {/* Question  */}
        {page === GAME_STATE.QUESTION && (
          <div className="play-page__question">
            <h3 className="play-page__main-text-content">
              {" "}
              {questions[questionIndex].text}
            </h3>
            <p className="play-page__timer">{time}</p>
            <Button
              text="Next"
              onClick={() => {
                setQuestionIndex(questionIndex + 1);
                if (questionIndex === questions.length - 1) {
                  setPage(GAME_STATE.GAME_OVER);
                } else setPage(GAME_STATE.INSTRUCTION_PROMPT);
              }}
            ></Button>
          </div>
        )}
        {/* Game Over  */}
        {page === GAME_STATE.GAME_OVER && (
          <div>
            <h3 className="play-page__main-text-content">Game over!</h3>
            <Button
              onClick={() => window.location.reload()}
              text="Play again?"
            ></Button>
            <Link to="/">
              <Button text="Return to Home Page"></Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayPage;
