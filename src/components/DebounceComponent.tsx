import React, { ReactElement, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

export default function DebounceComponent(): ReactElement {

    const [count, setcount] = useState(10)
    useDebounce(()=> alert(count), 1000, [count])

    return (
        <div>
            <h1>useDebounce hook 3</h1>
            <p>{count}</p>
            <button onClick={()=> setcount(c=>c+1)}>Increment</button>
            <p>Este hook sirve ejecutar una acción B solo cuando pase cierto tiempo después de finalizar cierta acción A</p>
            <p>useTimeout hace algo parecido, ejecuta una acción B, después de cierto tiempo de haber comenzado la acción A </p>
            <p>Por ejemplo un input de búsqueda que lanza la búsqueda solo cuando se deje de tipear y no letra por letra</p>

        </div>
    )
}
