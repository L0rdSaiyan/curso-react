import "./App.css";
import HelloWorl from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Informacoes from "./components/Informacoes";
import List from "./components/List";
import OlaCssModules from "./components/OlaCssModules";

function App() {
  const nome = "João Victor";

  return(

    <div className="App">

    <h1>Olá, {nome}</h1>
    <HelloWorl/>
    <SayMyName nome="João Victor"/>
    <Informacoes nome="João Victor" idade="15" profissao="Programador"/>
    <List></List>
    <OlaCssModules></OlaCssModules>

    </div>

  )


}
export default App;
