import estilos from './Lista.module.css'
import {Filme} from '../componentes/Filme'

export function Lista() {
    return (
        <main className={estilos.container}>
            <Filme/>
        </main>
    )
}