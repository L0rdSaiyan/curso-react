import './App.css';
import HelloWorl from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
 
 const nome = "João Victor"


 if(nome==="João Victor"){

  return(


    <div>
    <HelloWorl/>

    <SayMyName nome="João"/>


    </div>



  )

 }

  const somarNum = (a,b) =>{

    return a+b

  }

  return (
    <div className="App">
     <h1>Hello World</h1>
     <h1>Olá, {nome}</h1>
     <h1>soma: {somarNum(2,2)}</h1>
    </div>
  );
 

}
export default App;
