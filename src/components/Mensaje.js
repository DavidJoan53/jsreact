import React, { useEffect } from 'react'

export const Mensaje = () => {

    useEffect(() => {
        const mouseMove = (e) => {
            console.log(e.x, e.y)
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Componente de mensaje</h3>
        </div>
    )
}
