import React, { ReactElement, useState } from 'react'
import useUpdateEffect from '../hooks/useUpdateEffect'

export default function UpdateEffectComponent(): ReactElement {

    const [count, setcount] = useState(10)

    useUpdateEffect(()=>alert(count),[count])

    return (
        <div>
            <h1>useUpdateEffect hook 4</h1>
            <p>{count}</p>
            <button onClick={()=>setcount(c=>c+1)}>Increment</button>
            <p>Este hook es similar al useEffect pero si no queremos que se renderice al montar el componente. Solo cuando de actualiza</p>
        </div>
    )
}
