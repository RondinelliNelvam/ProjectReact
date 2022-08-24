import { useState } from "react";
import Button from "../Button/Button";
import { SuspenseList } from "../SuspenseList/SuspenseList";
import TextField from "../TextField/TextField";
import "./Forms.css";

const Forms = () => {
  const times = ["time1", "time2", "time3", "time4", "time5", "time6"];
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Valor obtido :", nome, imagem, cargo, time);
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
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button texto="Criar Card" />
      </form>
    </section>
  );
};

export default Forms;
