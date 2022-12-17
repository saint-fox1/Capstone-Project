import "./RadioButton.scss";

function RadioButton(props) {
  return (
    <label className="radio-button">
      <input
        className="radio-button__input"
        name="category"
        type="radio"
        value={props.value}
        onChange={props.onChange}
      />
      <span className="radio-button__details">{props.labelName}</span>
    </label>
  );
}
export default RadioButton;
