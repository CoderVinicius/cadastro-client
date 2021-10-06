function TextInput(props) {
  return (
    <div className="form1">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="input-group mb-3">
        <input
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          required={props.required}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default TextInput;
