import React from 'react'
import './Estilos.css'
import {useFetch} from '../hooks/useFetch'
import {useCounter} from '../hooks/useCounter'

export const ManyCustomHooks = () => {

    const {contando, incrementar, decrementar} = useCounter(1)

    const state = useFetch(`https://pokeapi.co/api/v2/pokemon/${contando}`)

    /* DATA */
    const { loading, data } = state

    /* SPECIFIC DATA */
    const { id, name, height, weight, sprites } = !!data && data
    const { front_default} = !!sprites && sprites

    console.log(front_default)

    return (
        <div>
            <h1>Pokemon API</h1>
            <hr/>
            
             {
                loading 
                 ?
                (
                <div className="alert alert-success" role="alert">
                Cargando...
                </div>
                )
                :
                (
                    <div className="card text-white bg-danger">
                        <img className="card-img-top" src={front_default} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">#{id} - {name}</h5>
                            <div className="card-cont">
                                <p className="card-p">Altura: {(height * 0.1).toFixed(2)} m.</p>
                                <p className="card-p">Peso: {(weight * 0.1).toFixed(2)} kg</p>
                            </div>
                        </div>
                    </div>
                )
             }
            <div className="btn-div">
            {
                contando<898
                 ?
                (
                    <div className="btn-container">
                        <button onClick={incrementar} type="button" className="btn btn-success">Incrementar</button>
                    </div>
                )
                :
                (
                    <div className="btn-container">
                        <button onClick={incrementar} type="button" className="btn btn-success disabled">Incrementar</button>
                    </div>
                )
            }

            {
                contando>1
                 ?
                (
                    <div className="btn-container">
                        <button onClick={decrementar} type="button" className="btn btn-success">Decrementar</button>
                    </div>
                )
                :
                (
                    <div className="btn-container">
                        <button onClick={decrementar} type="button" className="btn btn-success disabled">Decrementar</button>
                    </div>
                )
            }
            </div>
        </div>
    )
}
