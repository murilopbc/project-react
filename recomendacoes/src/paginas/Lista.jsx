import estilos from './Lista.module.css'
import {Filme} from '../componentes/Filme'
import { useEffect, useState } from 'react'

export function Lista() {

    const  [filmes, setFilmes] = useState([])

    const apiKey = "07e9b188ce58e608d62827e85ec07ed5"

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=pt-BR`)
        .then(resposta => resposta.json())
        .then(dados => setFilmes(dados.results))
    }, [])

    return (
        <main className={estilos.container}>
            {filmes.map( umFilme => <Filme propsFilme={umFilme} />)}
            
        </main>
    )
}