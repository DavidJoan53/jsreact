import React from 'react'
import {useCounter} from '../hooks/useCounter'
import './Estilos.css'

export const ContadorCustomHook = () => {
    const { contando, incrementar, decrementar, resetear} = useCounter(10)
    return (
        <>
            <h1>Custom Hook : {contando}</h1>
            <hr/>
            <button onClick={incrementar} className='btn'>+ 1</button>
            <button onClick={decrementar} className='btn'>- 1</button>
            <button onClick={resetear} className='btn'>Reset</button>
            
        </>
    )
}
