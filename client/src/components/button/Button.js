import "./Button.scss";

const BUTTON_ANIMATION_TIMING = 250;

function Button(props) {
  return (
    <div className="button-wrapper">
      <button
        className="button"
        onClick={() => {
          if (props.onClick) {
            setTimeout(() => props.onClick(), BUTTON_ANIMATION_TIMING);
          }
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
