const Pessoa = (props) =>{

    return(

        <div>

        <img src={props.foto} alt={props.nome}/>
        <p>Seu nome é: {props.nome}</p>
        <p>Sua idade é: {props.idade}</p>
        <p>Sua profissão é: {props.profissao}</p>

        </div>


    )



}

export default Pessoa