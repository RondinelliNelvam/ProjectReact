import { useState } from "react";
import Button from "../Button/Button";
import { SuspenseList } from "../SuspenseList/SuspenseList";
import TextField from "../TextField/TextField";
import "./Forms.css";

const Forms = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setteam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.registerContributor({ nome, cargo, imagem, team });
  };
  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          obrigatorio={true}
          label="Name"
          placeholder="Digite seu nome"
          valor={nome}
          onAlterado={(valor) => setNome(valor)}
        />
        <TextField
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          onAlterado={(valor) => setCargo(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          onAlterado={(valor) => setImagem(valor)}
        />
        <SuspenseList
          obrigatorio={true}
          label="time"
          itens={props.times}
          valor={team}
          aoAlterado={(valor) => setteam(valor)}
        />
        <Button texto="Criar Card" />
      </form>
    </section>
  );
};

export default Forms;
