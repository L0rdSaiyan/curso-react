import { useState } from "react"
const FormularioU = () =>{

    const [name,setName] = useState()

    function pegarNome(e){

        setName(e.target.value)
        console.log(name)


    }

    return(
    <div>

        <h1>Login</h1>
    <form>

    <input type="text" onChange={pegarNome} name="login" placeholder="Insira o seu nome de usuário:"></input>
    <br></br>
        <input type="password" name="senha" placeholder="Insira a sua senha:"></input>

    </form>

    </div>

    )
}

export default FormularioU