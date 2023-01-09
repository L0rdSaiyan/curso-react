const Pessoa = ({ foto, nome, idade, profissao }) => {
  return (
    <div>
      <img src={foto} alt={nome} />
      <p>Seu nome é: {nome}</p>
      <p>Sua idade é: {idade}</p>
      <p>Sua profissão é: {profissao}</p>
    </div>
  );
};


Pessoa.defaultProps = {

  nome: "João Victor Sales"

}

export default Pessoa;
