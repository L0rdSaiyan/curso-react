import styles from "./Item.module.css"
import PropTypes from 'prop-types'

const Item = ({marca, ano_lancamento}) =>{

    return(

        <>
                <li>Marca: {marca} - ano de lançamento: <span>{ano_lancamento}</span></li>
                <p>Marca renderizada com sucesso!</p>
            
        
        </>


    )


}

Item.propTypes = {

    marca: PropTypes.string.isRequired

}

export default Item

