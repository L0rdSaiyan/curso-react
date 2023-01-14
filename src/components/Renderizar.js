const Renderizar = ({users}) =>{

    return(
        <>
        
            <h3>Lista de usuários:</h3>
            {

                users.map((itens) =>(

                    <p>Usuário: {itens}</p>

                )
                )


            }

        </>


    )


}

export default Renderizar