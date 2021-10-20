import React, { ReactElement, useState, useCallback } from 'react'
import useTimeout from '../hooks/useTimeout'

export default function TimeoutComponent(): ReactElement {

const [count, setCount] = useState(10)

const {clear, reset} = useTimeout(()=> setCount(0) , 5000)

    return (
        <div>
            <h1>useTimeout hook 2</h1>
            <p>counter: {count}</p>
            <button onClick={()=> setCount(c=> c+1)}>Increment</button>
            <button onClick={()=> clear()}>Clear timeout</button>
            <button onClick={()=> reset()}>Reset</button>
            <p>Este hook establece una cuenta atrás para que se ejecute una acción. (transformar el counter a 0) </p>
            <p>Increment solo sirve para poder reiniciar el test. (modificar el counter para que sea distinto de 0) </p>
            <p> clear, va a detener dicha cuenta atrás y reset volverá a iniciar dicha cuenta atrás</p>
        </div>
    )
}
