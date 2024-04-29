import estilos from './Sobre.module.css'

export function Sobre() {
    return (

        <div className={estilos.perfil}>
            <img
                className={estilos.avatar}
                src='https://avatars.githubusercontent.com/u/148149959?v=4'
            />

            <p>Murilo</p>
            <p>2DS Bosch</p>

        </div>

    )

}