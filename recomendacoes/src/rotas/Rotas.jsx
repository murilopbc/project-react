import { Routes, Route } from "react-router-dom"
import { Login } from '../paginas/Login'
import { Inicial } from '../paginas/Inicial'
import { Perfil } from '../paginas/Perfil'

export function Rotas() {
    return (
        <Routes>

            <Route path='/' element={<Login />} />
            <Route path='inicial' element={<Inicial />} />
            <Route path='/perfil' element={<Perfil />} />
          
        </Routes>
    )
}