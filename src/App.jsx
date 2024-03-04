import { useEffect, useState } from "react";
import { QuantidadeBolas } from "./components/QuantidadeBolas";
import { GeradorBola } from "./components/GeradorBola";
import "./App.css";

function App() {
  const [quantBolas, setQuantBolas] = useState("");
  const [bolas, setBolas] = useState([""]);
  let resultado = [];

  useEffect(() => {
    criarBolas(quantBolas);
  }, [quantBolas]);

  function criarBolas(quantBolas) {
    for (let i = 0; i < quantBolas; i++) {
      geraBola();
    }
    setBolas(resultado);
  }

  function geraBola() {
    const bola = Math.floor(Math.random() * (60 - 1 + 1) + 1);
    if (resultado.includes(bola)) {
      geraBola();
    } else {
      resultado.push(bola);
    }
  }

  return (
    <div className="app">
      <h1>Bingo</h1>
      <div className="gerarBolas">
        <QuantidadeBolas
          quantBolas={quantBolas}
          setQuantBolas={setQuantBolas}
        />
      </div>
      <div className="sorteioContainer">
        {quantBolas && <h2>Results:</h2>}
        {quantBolas && (
          <div
            className="sorteio"
            style={{ width: `${bolas.length * 28 + 20}px` }}
          >
            <GeradorBola bolas={bolas} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
