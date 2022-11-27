import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function HomePage() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(
      `/play?player_one=${playerOne}&player_two=${playerTwo}&category=${category}`
    );
  };

  return (
    <div>
      <h1>30 Seconds - GO!</h1>
      <div>
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h2>How to</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Game Setup */}
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Who is playing?</h3>
            <label>Player 1</label>
            <br />
            <input
              placeholder="Name"
              name="playerOne"
              type="text"
              value={playerOne}
              onChange={(e) => setPlayerOne(e.target.value)}
            />
            <br />
            <label for="playerTwo">Player 2</label>
            <br />
            <input
              placeholder="Name"
              name="playerTwo"
              type="text"
              value={playerTwo}
              onChange={(e) => setPlayerTwo(e.target.value)}
            />
            <br />

            <h3>Pick your category</h3>
            <input
              name="category"
              type="radio"
              value="corporate"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>CORPORATE</label>
            <input
              name="category"
              type="radio"
              value="party"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>PARTY</label>
            <input
              name="category"
              type="radio"
              value="amigos"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>AMIGOS</label>
            <input
              name="category"
              type="radio"
              value="caliente"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>CALIENTE</label>
            <br />
            <input
              className="submitButton"
              type="submit"
              value="Create a game!"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
