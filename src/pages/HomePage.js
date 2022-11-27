import { Link } from "react-router-dom";

function HomePage() {
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
          <h3>Who is playing?</h3>
          <p>Player 1</p>
          <p>Player 2</p>
          <h3>Pick your category</h3>
          <p>CORPORATE</p>
          <p>PARTY</p>
          <p>AMIGOS</p>
          <p>CALIENTE</p>
          {/* <button onClick={() => setPage(GAME_STATE.INSTRUCTION_PROMPT)}>
            Ready to play!
          </button> */}
        </div>
        <Link to="/play"> Create a Game!</Link>
      </div>
    </div>
  );
}

export default HomePage;
