import { useState } from "react"
const ComponentUseState = () =>{

    const [numero, setNumero] = useState(0)
    const [nome,setNome] = useState("João")
    const [senha,setSenha] = useState()

    const cadastrarUsuario = (e) =>{

        e.preventDefault()
        console.log(`Usuário ${nome} cadastrado com a senha ${senha}`)



    }


    return(

        <>

            <p>O valor atual é: {numero}</p>
            <p>O valor anterior é: {numero-1} </p>
            <button id="btn" onClick={()=>{

    setNumero((prevNumero) => prevNumero +1)
    setNumero((prevNumero) => prevNumero +1)


            }}>Adicionar +1
            
            </button>
            <br></br>






            <form onSubmit={cadastrarUsuario}>

            <label htmlFor="usuario">Usuário:</label>
            <input type="text" value={nome} name="usuario" id="usuario" placeholder="insira o seu nome"
                onChange={(e) =>{

                    setNome(e.target.value)


                }}
            
            ></input>
                        <br></br>
                        <label htmlFor="senha">senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Insira a sua senha"
                        onChange={(e) =>{


                            setSenha(e.target.value)  

                        }}
                        
                        ></input>
                        <br></br>
                        <input type="submit" id="cadastrar" name="cadastrar" value="cadastrar"></input>


            </form>

           




        
        </>


    )


}


export default ComponentUseState