import { useState } from "react"
function RenderizaImg(){


    const [imagem,setImagem] = useState()

    const array = ["https://i.pinimg.com/236x/82/96/91/829691b009e8b3fbf4ec197833aa17bf.jpg", "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-O-Nome-de-Goku-1.png"]

    let index = Math.floor(Math.random()*2)
    function mostrarImg(){

        setImagem("")
        alert(`O index renderizado foi o: ${index}`)
        setImagem(array[index])

    }

    return(

        <>
         <button onClick={mostrarImg}></button>
        <img src={imagem} alt="img"></img>
        
        </>

       

    )


}

export default RenderizaImg