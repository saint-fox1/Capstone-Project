import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const GAME_STATE = {
  INSTRUCTION_PROMPT: 0,
  QUESTION: 1,
  GAME_OVER: 2,
};

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function PlayPage(props) {
  const query = useQuery();
  const [page, setPage] = useState(GAME_STATE.INSTRUCTION_PROMPT);
  const [playerOne, setPlayerOne] = useState(
    query.get("player_one") || "Player 1"
  );
  const [playerTwo, setPlayerTwo] = useState(
    query.get("player_two") || "Player 2"
  );
  const [category, setCategory] = useState(
    query.get("category") || "corporate"
  );
//   console.log(query.get("player_one"));
  //CountDown Timer
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (page === GAME_STATE.QUESTION) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      if (time === 0) {
        clearInterval(interval);
        console.log(time);
      }
      return () => clearInterval(interval);
    }
  });

  return (
    <div>
      {/* Prompt One  */}
      {page === GAME_STATE.INSTRUCTION_PROMPT && (
        <div>
          <h3>
            Player 1 is answerting the question, while Player 2 is listening...
          </h3>
          <button onClick={() => setPage(GAME_STATE.QUESTION)}>Ready!</button>
        </div>
      )}
      {/* Question  */}
      {page === GAME_STATE.QUESTION && (
        <div>
          <h3>Question </h3>
          <p>00:{time}</p>
          <button onClick={() => setPage(GAME_STATE.GAME_OVER)}>Next</button>
        </div>
      )}
      {/* Game Over  */}
      {page === GAME_STATE.GAME_OVER && (
        <div>
          <h3>Game over!</h3>
          <button onClick={() => setPage(GAME_STATE.GAME_SETUP)}>
            Play again?
          </button>
          <Link to="/"> Return to HomePage</Link>
        </div>
      )}
    </div>
  );
}

export default PlayPage;
