/* useRef = um gancho que permite criar diretamente uma referência ao elemento DOM no componente funcional */
import { useRef, useState } from "react"

export default function LoginForm (props) {
    const refEmail = useRef () 
    const refSenha = useRef ()
    const [erroEmail, setErroEmail] = useState()
    const [erroSenha, setErroSenha] = useState()


    function handleSubmit(event) {
        
        event.preventDefault() 
        if (!refEmail.current.value) {
            setErroEmail("Email obrigatório")
            refEmail.current.focus()            
        
        } else {
            setErroEmail("")
        }

        if (!refSenha.current.value) {
            setErroSenha("Senha obrigatória")                 
        } else if (refSenha.current.value.length < 3){
            setErroSenha ("Senha com no mínimo 3 caracteres")
        } else {
            setErroSenha ("")
        }
        
        if (erroEmail != "" || erroSenha != "" ) {
            return
        }
            
        
        /* entrar na aplicação */
        props.onSubmit(event)
        /* console.log(refEmail.current.value, 
            refSenha.current.value) */    

    }

    return (

        /* criando um formulário */
        <form onSubmit={handleSubmit}>
            {/* coloca bloco div para email e senha fica embaixo do outro */}
            <div>
            <label htmlFor="email">Email</label>
            {/* id="email" referencia htmlFor=email */}       
            <input type="email" id="email" name="email" ref={refEmail}/>
            {erroEmail && <p>{erroEmail}</p>}
            </div>
            <div>
            <label htmlFor="senha">Senha</label>
            {/* id="email" referencia htmlFor=senha */}       
            <input type="password" id="senha" name="senha" ref={refSenha}/>
            {erroSenha && <p>{erroSenha}</p>}
            <button>Entrar</button>
            </div>
        </form>        
    )
}