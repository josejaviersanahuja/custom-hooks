import React, { ReactElement } from 'react'
import useToggle from '../hooks/useToggle'

interface Props {
    
}

export default function Toggle({}: Props): ReactElement {

    const {value, toggleValue} = useToggle()

    return (
        <div>
            <p>{value.toString()}</p>
            <button onClick={()=>toggleValue(value)}>Toogle</button>
            <button onClick={()=>toggleValue(false)}>Make true</button>
            <button onClick={()=>toggleValue(true)}>Make false</button>
          
        </div>
    )
}
