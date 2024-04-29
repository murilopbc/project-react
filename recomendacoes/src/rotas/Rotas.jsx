import { Routes, Route } from "react-router-dom"
import { Login } from '../paginas/Login'
import { Inicial } from '../paginas/Inicial'
import { Lista } from '../paginas/Lista'
import { Perfil } from '../paginas/Perfil'

export function Rotas() {
    return (
        <Routes>

            <Route path='/' element={<Login />} />

            <Route path='inicial' element={<Inicial />}>
                <Route index element={<Lista />} />
                <Route path='/perfil' element={<Perfil />} />
            </Route>

        </Routes>
    )
}