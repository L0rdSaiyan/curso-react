import Item from "./Item"

const List = () =>{

    return(
    <>
        <ul>
          
            <Item marca="Microsoft" ano_lancamento={1975}/>
            <Item marca="Google" ano_lancamento={1998}/>
            <Item marca="Apple" ano_lancamento={1984}/>

        </ul>


    </>
    )

}


export default List