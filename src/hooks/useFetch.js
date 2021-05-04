import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [ result, setResult ] = useState({data: null, loading: true, error: null})

    useEffect(async () => {

        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setResult({loading: false, error: null, data})
        } catch(e){
            setResult({loading: false, error: 'Hubo un error bien culebro', data:null})
        }

        /*
        fetch(url)
        .then(resp => resp.json())
        .then(data => setResult({
            loading: false,
            error: null,
            data 
        }))
        */
    }, [url])

    return result
}
