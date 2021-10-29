import { ReactElement, useState, useEffect, useRef, LegacyRef, MutableRefObject, createRef } from 'react'
import useDeepCompareEffect from '../hooks/useDeepCompareEffect'

export default function DeepCompareEffectComponent(): ReactElement {

    const [age, setage] = useState(0)
    const [otherCount, setotherCount] = useState(0)
    const person = {age: age, name : "zitrojj"}

    const ref1 = useRef(0)
    const [ref2, setref2] = useState(0)

    useEffect(() => {
        ref1.current++        
    }, [person])

    useDeepCompareEffect(
        ()=>{
            setref2(c=>c+1)
        },[person])


    return (
        <div>
            <h1>useDeepCompareEffect hook 12</h1>
            <p>useEffect: <span id="span1">{ref1.current}</span></p>
            <p>useDeepCompareEffect: <span id="span2" >{ref2}</span></p>
            <p>Other Count: {otherCount}</p>
            <p>Person --- Age: {person.age} Name: {person.name}</p>
            <button onClick={()=>setage(c=>c+1)}>Increment Age</button>
            <button onClick={()=>setotherCount(c=>c+1)}>Increment Other Count</button>
            <p>Este hook sirve para crear un useEffect que no se ejecute por un cambio de referencia</p>
            <p>La cuestión es que el useEffect normal se ejecuta aunque la dependencia no cambia.</p>
        </div>
    )
}
