import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import RadioButton from "../../components/radioButton/RadioButton";
import logo from "../../assets/logos/30-Seconds.png";
import TextField from "../../components/textField/TextField";

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
    <div className="home-page">
      <img className="home-page__logo" src={logo} alt="logo"></img>
      <div className="home-page__form">
        <Card>
          <form onSubmit={handleSubmit}>
            <h2>Who is playing?</h2>
            <div className="home-page__text-field-wrapper">
              <TextField
                labelName={"Player 1"}
                placeholder={"Name"}
                name={"playerOne"}
                type={"text"}
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}
              ></TextField>
              <TextField
                labelName={"Player 2"}
                placeholder={"Name"}
                name={"playerTwo"}
                type={"text"}
                value={playerTwo}
                onChange={(e) => setPlayerTwo(e.target.value)}
              ></TextField>
            </div>

            <h2>Pick your category</h2>
            {categories?.map((element, index) => {
              return (
                <RadioButton
                  key={`category-${index}`}
                  value={element.name}
                  labelName={element.name}
                  onChange={(e) => setCategory(e.target.value)}
                ></RadioButton>
              );
            })}
            <Button text="Create a game!"></Button>
          </form>
        </Card>
      </div>
      <div className="home-page__info-wrapper">
        <Card>
          <h2>About</h2>
          <p>
            This game will bring you closer to anyone, whether it is a friend,
            colleague or a crush you've been meaning to make a move on. Both of
            you get to ask each other questions and get sincere answers.
            Sincere, because you won't get time to think them through! On top of
            that, you get to talk for 30 seconds straight and no one can
            interrupt you. Who knows, you might just learn something new and
            unpredicted about each other.
          </p>
        </Card>
        <Card>
          <h2>How to</h2>
          <p>
            You only need 2 players for this game. Players take turns asking
            each other a question that they see in the prompt. The player whose
            turn to answer, gets 30 seconds to talk. The caveat is that they
            HAVE to KEEP TALKING non-stop, even if they derailed from the
            original question. Then, players switch. Choose your category,
            depending on how spicy you want the questions to be.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
