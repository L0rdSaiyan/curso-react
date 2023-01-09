import styles from "./Frase.module.css"
import ConteudoFrase from "./ConteudoFrase";

const Frase = () => {

  return (
    <div className={styles.fraseContainer}>
      <ConteudoFrase frase="Este é um componente que retorna um componente feito utilizando fragment e css modules!"></ConteudoFrase>

    </div>
  );
};

export default Frase;
