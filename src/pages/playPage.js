import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GAME_STATE = {
  GAME_SETUP: 0,
  INSTRUCTION_PROMPT: 1,
  QUESTION: 2,
  GAME_OVER: 3,
};

function PlayPage() {
  const [page, setPage] = useState(GAME_STATE.GAME_SETUP);

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
      {/* Game Setup */}
      {page === GAME_STATE.GAME_SETUP && (
        <div>
          <h3>Who is playing?</h3>
          <p>Player 1</p>
          <p>Player 2</p>
          <h3>Pick your category</h3>
          <p>CORPORATE</p>
          <p>PARTY</p>
          <p>AMIGOS</p>
          <p>CALIENTE</p>
          <button onClick={() => setPage(GAME_STATE.INSTRUCTION_PROMPT)}>
            Ready to play!
          </button>
        </div>
      )}
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
