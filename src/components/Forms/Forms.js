import TextField from "../TextField/TextField";
import "./Forms.css";

const Forms = () => {
  return (
    <section>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Name" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Forms;
