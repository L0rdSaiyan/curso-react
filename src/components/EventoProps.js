import Button from "./eventos/Button"
const EventoProps = () =>{


    function meuEvento(){

        alert(`Olá, o primeiro evento foi ativado!`)
    }

    function segundoEvento(){

        alert(`Olá, o segundo evento foi ativado!`)

        
    }

    function somar(a,b){

        alert(a+b)

    }

    return(
        <>
        
        <p>Este é um componente com evento de props</p>
        <Button event={meuEvento} text="primeiro Evento"></Button>
        <Button event={segundoEvento} text="segundo Evento"></Button>
        <Button event={()=>{somar(1+1)}} text="Somar!"></Button>

        </>
        
    )


}
export default EventoProps