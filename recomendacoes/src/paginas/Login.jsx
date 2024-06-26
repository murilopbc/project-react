import { useState } from 'react'
import estilos from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function obterDadosFormulario() {
        navigate('inicial')
       

    }

    return (
        <div className={estilos.container} onSubmit={obterDadosFormulario}>
            <form className={estilos.formulario}>
                <input className={estilos.campo} placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <input className={estilos.campo} placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <button className={estilos.botao}>Entrar</button>
            </form>
        </div>
    )
}