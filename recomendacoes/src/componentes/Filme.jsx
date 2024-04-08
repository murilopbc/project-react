import estilos from './Filme.module.css'
import { Card } from './Card';

export function Filme({propsFilme}) {
    return (
        <Card>
            <figure className={estilos.container}>
                <img src={`https://image.tmdb.org/t/p/w400${propsFilme.poster_path}`} alt="" />
                <figcaption>{propsFilme.title}</figcaption>
                <p>{propsFilme.overview}</p>
                <p>{propsFilme.vote_average}</p>
            </figure>

        </Card>

    )
}