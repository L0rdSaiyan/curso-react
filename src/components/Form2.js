import Renderizar from "./Renderizar"
import { useState } from "react"
const Form2 = () =>{

    const [nome,setNome] = useState()
    const users = []
    function atualizarNome(e){
        setNome(e.target.value)
        console.log(nome)

    }

    function enviarBtn(e){
        e.preventDefault()
        users.push(nome)
        alert(`O usuário ${nome} foi cadastrado com sucesso!`)
    }

 
    return(

        <div>
            <form>

                <input type="text" onChange={atualizarNome}  placeholder="Insira o seu nome de usuário" name="usuario" id="usuario"></input>
                <br></br>
                <input type="password" placeholder="Insira a sua senha" name="senha" id="senha"></input>
                <br></br>
                <button type="submit" onClick={enviarBtn}>Enviar</button>
                <br></br>
            </form>
        </div>


    )


}


export default Form2