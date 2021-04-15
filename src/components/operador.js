import { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

const Operador = ({numUno, numDos, cadena}) => {
    const [resultado, setResultado] = useState(0);

    return (
        <>
        <h1>PARCIAL #1</h1>

        <h2>Los números son "{numUno}" y "{numDos}"</h2>
        <button onClick={( () => setResultado(numUno + numDos))} > Sumar</button>
        <button onClick={( () => setResultado(numUno - numDos))} > Restar</button>

        <p>Señor "{cadena}", el resultado de la suma o resta es {resultado==0 ? "NO SÉ HA REALIZADO NINGUNA OPERACIÓN" : resultado}</p>
        </>
    )
}

Operador.propTypes = {
    numUno: PropTypes.number.isRequired,
    numDos: PropTypes.number.isRequired,
    cadena: PropTypes.string.isRequired
}

export default Operador;
