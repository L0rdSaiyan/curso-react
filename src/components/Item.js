import styles from "./Item.module.css";
import PropTypes from "prop-types";

const Item = ({ marca, ano_lancamento }) => {
  
    return (
    <>
      <li>
        Marca: {marca} - ano de lançamento: <span>{ano_lancamento}</span>
      </li>
      <p>Marca renderizada com sucesso!</p>
    </>
  );
};

//Define o tipo e a obrigatoriedade do atributo
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number.isRequired
};

Item.defaultProps = {

    marca: "Favor, inserir o nome da marca",
    ano_lancamento: 0


}


export default Item;
