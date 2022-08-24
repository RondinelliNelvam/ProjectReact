import "./SuspenseList.css";

const SuspenseList = (props) => {
  return (
    <div className="suspense-list">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export { SuspenseList };
