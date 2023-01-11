function Form(){

    function cadastrarUsuario (e){

        const btn = document.querySelector("#btn").value

        e.preventDefault()
        alert(`Usuário ${btn} cadastrado com sucesso!`)


    }

    return(
    
        
        <div>
        <form onSubmit={cadastrarUsuario}>

        <div>
        <input style={{marginTop: "20px" }} id="btn" type="text" placeholder="Digite seu home">
        </input>
        </div>
        <input style={{marginTop: "5px"}} type="submit" value="Cadastrar"></input>


        </form>


       </div>
    )

}

export default Form