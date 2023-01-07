import "./App.css";
import HelloWorl from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "João Victor";

  if (nome === "João Victor") {
    return (
      <div className="App">
        <HelloWorl></HelloWorl>
        <SayMyName nome="João" />
        <SayMyName nome={nome} />
        <Pessoa
          nome={nome}
          idade="16"
          profissao="Programador"
          foto="https://criticalhits.com.br/wp-content/uploads/2019/11/gogeta-instinto-superior.jpg"
        />
      </div>
    );
  }

  const somarNum = (a, b) => {
    return a + b;
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>Olá, {nome}</h1>
      <h1>soma: {somarNum(2, 2)}</h1>
    </div>
  );
}
export default App;
