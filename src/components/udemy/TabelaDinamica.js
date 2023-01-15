const TabelaDinamica = ({tamanhoTabela,titulo1,titulo2,titulo3,id,item,preco, larguraTabela}) =>{

    return(

        <div>
        <table style={{textAlign: "center"}} border={tamanhoTabela} width={larguraTabela} >

        <tr>

        <th>{titulo1}</th>
        <th>{titulo2}</th>
        <th>{titulo3}</th>
        </tr>
        <tr>

        <td>{id}</td>
        <td>{item}</td>
        <td>{preco}</td>
        
        
                </tr>

        </table>
</div>
    

    )


}
export default TabelaDinamica