import "./TextField.css";

const TextField = (props) => {
  const modifyPlaceholder = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={modifyPlaceholder} />
    </div>
  );
};

export default TextField;
