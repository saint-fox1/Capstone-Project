import "./TextField.scss";

function TextField(props) {
  return (
    <label className="text-field">
      <span className="text-field__label">{props.labelName}</span>
      <input
        className="text-field__input"
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}
export default TextField;
