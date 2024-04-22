import { useState } from 'react'
import estilos from './Login.module.css'

export function Login(){

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function obterDadosFormulario(e){
        e.preventDefault()
        console.log(`Usuario: ${usuario}`)
        console.log(`Senha: ${senha}`)

    }

    return(
        <div className={estilos.container} onSubmit={obterDadosFormulario}>
            <form className={estilos.formulario}>
                <input className={estilos.campo} placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)}/>
                <input className={estilos.campo} placeholder="Senha" value={senha} onChange={ e => setSenha(e.target.value)}/>
                <button className={estilos.botao}>Entrar</button>
            </form>
        </div>
    )
}