import React, { useState, useEffect} from 'react'
import './Estilos.css'
import { Mensaje } from './Mensaje.js'

export const Form = () => {
    const [ formState, setFormState ] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    const HandleInputChange = ({target}) =>{
        //console.log(e.target)
        setFormState({
            ...formState,
            [target.name] : target.value
        })
     }

    useEffect(() => {
        console.log('Hola soy un componente cargandose')
    }, [])

    useEffect(() => {
        console.log('El formState ha cambiado')
    }, [formState])

    useEffect(() => {
        console.log('El name ha sido modificiado')
    }, [formState.name])

    return (
        <div>
            <h1>Formulario en React</h1>
            <hr></hr>
            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                autoComplete= "off"
                value={name}
                onChange={HandleInputChange}
                />
             </div>

             <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                autoComplete= "off"
                value={email}
                onChange={HandleInputChange}
                />
             </div>

             {(name === '123') && <Mensaje/>}
        </div>
    )
}
