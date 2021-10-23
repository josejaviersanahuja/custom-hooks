import React, { ReactElement, useState } from 'react'
import usePrevious from '../hooks/usePrevious'

export default function PreviousComponent(): ReactElement {

    const [count, setcount] = useState(0)
    const [name, setname] = useState("zitrojj") // just to show that another render wont affect the hook

    const previousCount = usePrevious(count)

    return (
        <div>
            <h1>usePrevious hook 6</h1>
            <p>{count} - {previousCount}</p>
            <p>{name}</p>
            <button onClick={()=>setcount(c=>c+1)}>Increment</button>
            <button onClick={()=>setname("jose javier")}>Change name</button>
        </div>
    )
}
