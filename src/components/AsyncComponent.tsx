import { ReactElement } from 'react'
import useAsync from '../hooks/useAsync'

export default function AsyncComponent(): ReactElement {

    const {error, loading, value} = useAsync(
        ()=>{
            return new Promise<string>((resolve, reject) => {
                const success = true
                setTimeout(() => {
                    success? resolve("hi") : reject("Error")
                }, 1000);
            })
        }
    )
    return (
        <div>
            <h1>useAsync hook 9</h1>
            <p>{error}</p>
            <p>{value}</p>
            <p>{loading.toString()}</p>
        </div>
    )
}