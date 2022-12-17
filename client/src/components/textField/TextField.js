import "./TextField.scss";

function TextField(props) {
  return (
    <div className="text-field">
      <label>{props.labelName}</label>
      <br />
      <input
        className="text-field__input"
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export default TextField;
