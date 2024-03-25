import { FilmReel, FilmStrip} from "@phosphor-icons/react";
import estilos from './Cabecalho.module.css'

export function Cabecalho(){
    return (
        <header className={estilos.container}>
            <FilmReel 
            color='#dcdcdd'
            size={35} 
            weight="duotone"
            />
            <p>Recomendações</p>
            <FilmStrip 
            color='#dcdcdd'
            size={35} 
            weight="duotone"
            />

        </header>
    )
}