import { useState } from "react";
import testeAlerta from "./importEv";
import { useRef } from "react";
import { useEffect } from "react";
const UsoUseState = () => {
  const [numero, setNumero] = useState(0);

    const meuElemento = useRef(null)
    const titulo = useRef(0)

    useEffect(() =>{

    titulo.current.addEventListener('click',function(){alert(`Eae, meu nobre! Eu sou o ${nome}`)})
    meuElemento.current.addEventListener('click',function(){alert("oi")})

    })


  //let nome = "João"
  //o nome aqui é o estado atual (valor que vai ser lido), no outro 
  //índice (setNome) fica uma função para alterar o valor atual para outro valor
  const [nome, setNome] = useState("João");























  return (
    <>

        <button ref={meuElemento}>Hook de use ref</button>
      <h1 ref={titulo}>{nome}</h1>

      <button
        onMouseEnter={() => {
          setNome("João Victor");
            setNumero(numero + 100)
          setTimeout(() => {
            setNome("João");
          }, 3000);
        }}
      >
        {numero}
      </button>
    </>

  );
};

export default UsoUseState;
