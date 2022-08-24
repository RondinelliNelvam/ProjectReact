import Colaborator from "../Colaborator/Colaborator";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.colorSec };
  const bordercss = { borderColor: props.colorPrim };
  return (
    <section className="time" style={css}>
      <h3 style={bordercss}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborator
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
