import { ReactElement, useState } from 'react'
import useFetch from '../hooks/useFetch'

export default function FetchComponent(): ReactElement {

    const [id, setid] = useState(1)
    const {error, loading, value} = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{},[id])
    console.log(value);
    
    return (
        <div>
            <h1>useFetch hook 10</h1>
            <p>{error}</p>
            <div> {value && Object.keys(value).map((key, i)=> <p key={i+key}>{key}: {value[key]}</p>)} </div>
            <p>{loading.toString()}</p>
            <button onClick={()=>setid(c=>c+1)}>Increment</button>
        </div>
    )
}
