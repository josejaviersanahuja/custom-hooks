import { ReactElement, useEffect, useState } from 'react'
import {useLocalStorage, useSessionStorage} from '../hooks/useStorage'

export default function StorageComponent(): ReactElement {

    const [name, setName, removeName] = useSessionStorage("name", "zitrojj")
    const [age, setAge, removeAge] = useLocalStorage("age", 34)

    // states to test
    const [session, setsession] = useState<null| undefined |string>(null)
    const [local, setlocal] = useState<null| undefined | string>(null)
    useEffect(() => {
        setsession(sessionStorage.getItem("name"))
        setlocal(localStorage.getItem("age"))
    }, [name, age, sessionStorage, localStorage])

    return (
        <div>
            <h1>useStorage hook 8</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>SessionStorage: {session}</p>
            <p>LocalStorage: {local}</p>
            <button onClick={()=>{setName("Jhon")}}>Set Name</button>
            <button onClick={()=>{setAge(30)}}>Set Age</button>
            <button onClick={()=>{removeName()}}>Remove Name</button>
            <button onClick={()=>{removeAge()}}>Remove Age</button>
        </div>
    )
}
