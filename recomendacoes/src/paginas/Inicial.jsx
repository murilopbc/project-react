import estilos from './Inicial.module.css'
import { Cabecalho } from '../componentes/Cabecalho'
import { Lateral } from '../componentes/Lateral'
import { Lista} from './Lista'

export function Inicial() {

  return (
    <div className={estilos.gridContainer}>
     <Cabecalho />
     <Lateral/>
      <Lista/>

    </div>
  )
}

