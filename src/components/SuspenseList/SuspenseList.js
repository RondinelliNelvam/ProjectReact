import "./SuspenseList.css";

const SuspenseList = (props) => {
  return (
    <div className="suspense-list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value={""}></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export { SuspenseList };
