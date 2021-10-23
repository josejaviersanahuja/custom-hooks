import { ReactElement, useState } from 'react'
import useStateWithHistory from '../hooks/useStateWithHistory'

export default function StateWithHistoryComponent(): ReactElement {

    const {value, setValue, history, pointer, back, forward, go} = useStateWithHistory(1)
    const [name, setname] = useState("zitrojj")
    
    return (
        <div>
            <h1>useStateWithHistory hook 7</h1>
            <p>Count: {value}</p>
            <p>History: {history.join(', ')}</p>
            <p>Pointer: {pointer}</p>
            <p>Name: {name}</p>
            <button onClick={()=>{setValue(value+1)}}>Increment</button>
            <button onClick={()=>setValue(value*2)}>Double</button>
            <button onClick={()=>{back()}}>Back</button>
            <button onClick={()=>forward()}>Forward</button>
            <button onClick={()=>{go(2)}}>Go to index 2</button>
            <button onClick={()=>setname("jose javier")}>Change name</button>
        </div>
    )
}
