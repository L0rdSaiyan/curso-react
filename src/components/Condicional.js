import {useState} from 'react'

const Condicional = ()=>{

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    const enviarEmail = (e) =>{

        e.preventDefault()
        setUserEmail(email)
        alert(userEmail)


    }

    return(
        <>
        
        <form>

        <input type="text" placeholder='Digite o seu email...' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <button type='submit' onClick={enviarEmail}>Enviar</button>
        {userEmail}
        </form>

        </>


    )


}

export default Condicional