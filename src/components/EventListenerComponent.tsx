import {useState} from 'react'
import useEventListener from '../hooks/useEventListener'

export default function EventListenerComponent(){
    
    const [key, setkey] = useState("")

    useEventListener("keydown", (e)=>{
        setkey(e.key)
    })

    return (
        <div>
            <h1>useEventListener hook 13</h1>
            <p>Last key: {key}</p>
        </div>
    )
}
