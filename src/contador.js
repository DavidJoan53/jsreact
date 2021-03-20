import react, { useState } from 'react'
import PropTypes from 'prop-types'

const Contador = ({name, propNum}) => {
    const [cuenta, setCuenta] = useState(propNum);

    return (
        <>
        <h1>CONTADOR DE CLICKS</h1>
        <p>Realizado por: {name}</p>
        <h2>Click realizados</h2>
        <p>{cuenta}</p>
        <button onClick={( () => setCuenta(cuenta + 1))} > Sumar</button>
        <button onClick={( () => setCuenta(cuenta - 1))} > Restar</button>
        <br/>
        <br/>
        <button onClick={( () => setCuenta(propNum))} > Reiniciar</button>
       
        </>
    )
}

Contador.propTypes = {
    propNum: PropTypes.number.isRequired
}

export default Contador;
