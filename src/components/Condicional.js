import {useState} from 'react'

const Condicional = ()=>{

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    const enviarEmail = (e) =>{

        e.preventDefault()
        setUserEmail(email)


    }
    const limparEmail = () =>{

        setUserEmail("")


    }

    const verificaEmail=(e) =>{
        e.preventDefault()

        if(!userEmail.includes("gmail.com")){

            alert("Favor inserir o email corretamente!")

        }

    }

    return(
        <>
        
        <form>

        <input type="text" placeholder='Digite o seu email...' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <button type='submit' onClick={enviarEmail}>Enviar</button>
     

        {userEmail &&(

            <div>

            <p>Eae meu nobre! {userEmail}</p>
            <button onClick={limparEmail}>Limpar email!</button>
            <button onClick={verificaEmail}>verificar</button>


            </div>


        )
        
        
        
        }
        </form>

        </>


    )


}

export default Condicional