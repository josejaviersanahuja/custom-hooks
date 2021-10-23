import { useState, useRef, useCallback } from "react"

export default function useStateWithHistory(defaultValue: any, capacity : number = 10) {
 
    const [value, setvalue] = useState(defaultValue)
    const historyRef = useRef([value]).current
    const pointerRef = useRef(0)

    const set = useCallback(
        (v) => {
            const resolvedValue = typeof v === "function"? v(value) : v
            if (historyRef[pointerRef.current] !== resolvedValue) {
                // change the forward history if the pointer is not at the end
                if (pointerRef.current < historyRef.length-1) {
                    historyRef.splice(pointerRef.current+1)
                }

                // push the history
                historyRef.push(resolvedValue)

                // if the history is bigger than capacity shift
                while(historyRef.length > capacity){
                    historyRef.shift()
                }

                // pointer ends up at the end again
                pointerRef.current = historyRef.length-1
            }
            // set the new value
            setvalue(resolvedValue)
        },
        [capacity, value],
    )

    const back = useCallback(
        () => {
            // break in this corner case
            if(pointerRef.current <= 0) return

            pointerRef.current--
            setvalue(historyRef[pointerRef.current])
        },
        [],
    )
    
    const forward = useCallback(
        () => {
            // break in this corner case
            if(pointerRef.current >= historyRef.length-1) return

            pointerRef.current++
            setvalue(historyRef[pointerRef.current])
        },
        [],
    )
    
    const go = useCallback(
        (index:number) => {
            // break in this corner case
            if(index < 0 || index >= historyRef.length-1) return

            pointerRef.current = index
            setvalue(historyRef[index])
        },
        [],
    )

    return {value, setValue: set, history: historyRef, pointer: pointerRef.current, back, forward, go}

}
