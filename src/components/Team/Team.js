import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.colorSec };
  const bordercss = { borderColor: props.colorPrim };
  return (
    <section className="time" style={css}>
      <h3 style={bordercss}>{props.nome}</h3>
    </section>
  );
};

export default Team;
