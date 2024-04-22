
import estilos from './Perfil.module.css'
import {useForm} from 'react-hook-form'

export function Perfil() {
    const {register, handleSubmit} = useForm()

    function obterDadosFormulario(data){
        console.log(`Nome: ${data.nome}`)
        console.log(`Usuário: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }


    return (
        <div className={estilos.container}>
            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <input {...register('nome')} className={estilos.campo} placeholder="Nome" />
                <input {...register('usuario')} className={estilos.campo} placeholder="Usuário" />
                <input {...register('senha')} className={estilos.campo} placeholder="Senha" />
                <button className={estilos.botao}>Confirmar</button>
            </form>
        </div>
    )
}