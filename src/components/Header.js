import React, {useState} from 'react'

import './Estilos.css'

export const Header = () => {
    const [ dark, setDarkmode ] = useState(false)

    const handleDarkmode = () => {
        setDarkmode(!dark)
        console.log('Prueba')
    }
    return (
        <div>
            <h1>Header de la página</h1>
            <br/>
            <button onClick = {handleDarkmode}> Estado {{dark} ? 'Dark Mode':'Light mode'}</button>
        </div>
    )
}
