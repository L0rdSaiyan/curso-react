
import { useState } from "react"
const FormularioU = ({lista}) =>{

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
        <p>Sexo:</p>
           <input type="radio" name="sexo" value="masculino"></input>Masculino
           <input type="radio" name="sexo" value="feminino"></input>Feminino
           <br></br>
           <input type="checkbox" name="interesses" value="programação"></input>programação
           <input type="checkbox" name="interesses" value="leitura"></input>programação
            <br></br>

        <select>

            {
                lista.map((item) =>(

                    <option>{item}</option>


                )


)            }


        </select>

       
    


 </form>

    </div>

    )


}

export default FormularioU