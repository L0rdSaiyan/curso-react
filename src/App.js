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
import Condicional from "./components/Condicional";
import RenderizaImg from "./components/RenderizaImg";
import OutraLista from "./components/OutraLista";
import Form2 from "./components/Form2";
import NumAleatorio from "./components/NumAleatorio";
import Button2 from "./components/eventos/Button2";
import RenderizarTextos from "./components/eventos/RenderizarTextos";
import TabelaDinamica from "./components/udemy/TabelaDinamica";
import FormularioU from "./components/udemy/FormularioU";

function App() {
  const nome = "João Victor";

  function dizerNome(){

    alert("oLA JOAO")

  }

  function dizerFrase(){

    return "O meu nome é:"

  }

  function dizerNome(){

    return "João"

  }

  const meuArray = ["React", "Vue", "Angular"]

  return (
    <div className="App">
      <h1>Testando renderização de listas</h1>
      {/* <Evento2js video="https://www.youtube.com/watch?v=fPuDTdQZzKk"></Evento2js> */}
    <FormularioU lista={meuArray}></FormularioU>
    </div>
  );
}
export default App;
