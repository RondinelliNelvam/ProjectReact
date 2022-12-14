import Colaborator from "../Colaborator/Colaborator";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.colorSec };
  const bordercss = { borderColor: props.colorPrim };
  return (
    (props.colaboradores.length  > 0) ? <section className="time" style={css}>
      <h3 style={bordercss}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborator corDeFundo= {props.colorPrim} key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
    : ""
  );
};

export default Team;
