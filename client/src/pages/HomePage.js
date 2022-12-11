import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(
      `/play?player_one=${playerOne}&player_two=${playerTwo}&category=${category}`
    );
  };

  useEffect(() => {
    if (!categories) {
      axios
        .get("http://localhost:8080/categories/")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((e) => {
          console.error("The error:", e);
        });
    }
  }, [categories]);

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
            <label htmlFor="playerTwo">Player 2</label>
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
            {categories?.map((element, index) => {
              return (
                <div key={`category-${index}`}>
                  <input
                    name="category"
                    type="radio"
                    value={element.name}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label>{element.name}</label>
                </div>
              );
            })}
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
