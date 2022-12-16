import "./Button.scss";

function Button(props) {
  const onClick = () => {
    if (props.onClick) {
      setTimeout(() => {
        props.onClick();
      }, 250);
    }
  };

  return (
    <button className="button" onClick={onClick}>
      {props.text}
    </button>
  );
}

export default Button;
