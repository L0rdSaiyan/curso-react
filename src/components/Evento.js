import propTypes from 'prop-types'
import styles from "./Evento.module.css"
function Evento({numero}) {
  const meuEvento = () => {
    alert(`O número declarado no atributo foi: ${numero}`);
  };

  return (
    <>
      <p>Clique para disparar o evento</p>
      <button className={styles.btn} onClick={meuEvento}>Ativar!</button>
    </>
  );
}

Evento.propTypes = {

    numero: propTypes.number.isRequired

}

export default Evento;
