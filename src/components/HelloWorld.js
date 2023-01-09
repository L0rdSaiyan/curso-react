import Frase from "./Frase";

const HelloWorl = () => {
  const url =
    "https://i.pinimg.com/originals/64/ff/c9/64ffc9833b6ccf3c857a7db9524a00ed.jpg";
  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <h1>Olá, João Victor</h1>
      <img src={url} id="img" alt="minhaImg" />
      <Frase />
    </div>
  );
};


export default HelloWorl;
