import "./App.css";
import HelloWorl from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Informacoes from "./components/Informacoes";
import List from "./components/List";
import OlaCssModules from "./components/OlaCssModules";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Evento2js from "./components/Evento2";
import UsoUseState from "./components/UsoUseState";
import ComponentUseState from "./components/ComponentUseState";
import EventoProps from "./components/EventoProps";

function App() {
  const nome = "João Victor";

  function renderizarTexto() {
    setTimeout((massa) => {
      <Form></Form>;
    }, 5000);
  }

  return (
    <div className="App" onLoad={renderizarTexto}>
      <h1>Olá, {nome}</h1>
      {/* <Evento2js video="https://www.youtube.com/watch?v=fPuDTdQZzKk"></Evento2js> */}
    </div>
  );
}
export default App;
