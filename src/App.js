import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Forms from "./components/Forms/Forms";

function App() {
  const [contributors, setContributor] = useState([]);
  const newContributor = (contributor) => {
    console.log(contributor);
    // setContributor(...contributors, contributor);
  };
  return (
    <div className="App">
      <Banner />
      <Forms
        registerContributor={(contributor) => newContributor(contributor)}
      />
    </div>
  );
}

export default App;
