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

function App() {
  const nome = "João Victor";

  return(

    <div className="App">

    <h1>Olá, {nome}</h1>
    <h2>Testando Eventos</h2>
    <Evento2js video="https://www.youtube.com/watch?v=fPuDTdQZzKk"></Evento2js>

    </div>

  )


}
export default App;
