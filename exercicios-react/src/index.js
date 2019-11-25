import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB as B} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiComponentes'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'
  
const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <ComponenteClasse  valor="Sou um componente de classe"/>
        <Pai/>
        <ComponenteComFuncao/>
        <Familia sobrenome="Pereira"> 
            <Membro nome="Luciano"  />
            <Membro nome="Lavinia"  />
        </Familia>
        <CompA valor="Olá eu sou A"/>
        <B valor="Olá eu sou B"/>
        <PrimeiroComponente valor= "Bom dia!"/>
        <MultiElementos />
        <FamiliaSilva/>
    </div>, 
elemento)

