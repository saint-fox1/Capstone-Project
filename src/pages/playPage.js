function PlayPage() {
  return (
    <div>
      {/* Create a game screen */}
      <div>
        <h3>Who is playing</h3>
        <p>Player 1</p>
        <p>Player 2</p>
        <h3>Pick your category</h3>
        <p>corporate</p>
        <p>party</p>
        <p>amigos</p>
        <p>caliente</p>
        <button>Play</button>
      </div>
      {/* Prompt 1  */}
      <div>
        <h3>
          Player 1 is answerting the question, while Player 2 is listening...
        </h3>
        <button>Ready!</button>
      </div>
      {/* Question  */}
      <div>
        <h3>Question </h3>
        <p>Timer started</p>
        <button>Next</button>
      </div>
      {/* Prompt 2  */}
      <div>
        <h3>Switch Players!</h3>
        <button>Ready!</button>
      </div>
      {/* Game Over  */}
      <div>
        <h3>Game over!</h3>
        <button>Play again?</button>
        <button>return to HomePage</button>
      </div>
    </div>
  );
}

export default PlayPage;
