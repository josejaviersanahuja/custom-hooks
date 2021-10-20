import React, { ReactElement } from 'react'
import useToggle from '../hooks/useToggle'

export default function Toggle(): ReactElement {

    const {value, toggleValue} = useToggle(false)

    return (
        <div>
            <h1>useToggle hook 1</h1>
            <p>{value.toString()}</p>
            <button onClick={()=>toggleValue(value)}>Toogle</button>
            <button onClick={()=>toggleValue(false)}>Make true</button>
            <button onClick={()=>toggleValue(true)}>Make false</button>
          
        </div>
    )
}
