import "./RadioButton.scss";

function RadioButton(props) {
  return (
    <div className="radio-form">
      <input
        className="radio-form__button"
        name="category"
        type="radio"
        value={props.value}
        onChange={props.onChange}
      />
      <label>{props.labelName}</label>
    </div>
  );
}
export default RadioButton;
