import {useState} from 'react'

function Form(){

    function cadastrarUsuario (e){

        const usuario = document.querySelector("#usuario").value

      

        e.preventDefault()
        alert(`Usuário ${usuario} cadastrado com sucesso!`)
        console.log(nome)

    }


    const [count, setCount] = useState(0);
    const [numero, setNumero] = useState(100)
    const [nome, setNome] = useState("João")

    function renderizarNome(e){

        setNome(e.target.value)
        console.log(e.target.value)
        setNumero(numero+1)

    }



    return(
    
        <div> 


        <h1>O meu nome é:   {nome}</h1>

        <button onClick={() =>{

            setNumero(numero+100)

        }}>{`Números: ${numero}`}</button>







             <button onClick={() => {setCount(count+1       );
         //setCount((prevState) => { return prevState + 1 });
       }}
>{`Clicks: ${count}`}</button>










        
        <form onSubmit={cadastrarUsuario}>

        <div>
            <label htmlFor="usuario">Nome:</label>
        <input style={{marginTop: "20px" }} id="usuario" type="text" name="usuario" placeholder="Digite seu home"
        onChange={renderizarNome} value={nome}
        >
        </input>
        <label htmlFor="senha">Senha:</label>
        <input style={{marginTop: "20px" }} id="senha" type="password" name="senha" placeholder="Digite sua senha"></input>


        </div>
        <input style={{marginTop: "5px"}} type="submit" value="Cadastrar"></input>


        </form>


       </div>
    )

}

export default Form