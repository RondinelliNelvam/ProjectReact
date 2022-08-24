import "./TextField.css";

const TextField = (props) => {
  const modifyPlaceholder = `${props.placeholder}...`;

  const onDigit = (event) => {
    props.onAlterado(event.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onDigit}
        required={props.obrigatorio}
        placeholder={modifyPlaceholder}
      />
    </div>
  );
};

export default TextField;
