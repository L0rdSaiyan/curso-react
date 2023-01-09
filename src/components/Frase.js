import styles from "./Frase.module.css"


const Frase = () => {

  return (
    <div className={styles.fraseContainer}>
      <p>Este é um componente com uma frase estilizada com CSS Modules</p>
    </div>
  );
};

export default Frase;
