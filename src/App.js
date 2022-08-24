import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Forms from "./components/Forms/Forms";
import Team from "./components/Team/Team";

function App() {
  const teams = [
    { nome: "time1", colorPrim: "#57C278", colorSec: "#D9F7E9" },
    { nome: "time2", colorPrim: "#82CFFA", colorSec: "#F8F8DE" },
    { nome: "time3", colorPrim: "#A6D157", colorSec: "#F0F8E2" },
    { nome: "time4", colorPrim: "#E06B69", colorSec: "#FDE7E8" },
    { nome: "time5", colorPrim: "#D86EBF", colorSec: "#FAE9F5" },
    { nome: "time6", colorPrim: "#FFBA29", colorSec: "#FFEEDF" },
  ];

  const [colaboradores, setColaboradores] = useState([]);
  const newContributor = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Forms
        times={teams.map((time) => time.nome)}
        registerContributor={(colaborador) => newContributor(colaborador)}
      />
      {teams.map((team) => (
        <Team
          key={team.nome}
          nome={team.nome}
          colorPrim={team.colorPrim}
          colorSec={team.colorSec}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.team == team.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
