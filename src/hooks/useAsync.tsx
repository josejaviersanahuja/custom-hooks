import {useCallback, useEffect, useState} from 'react'

export default function useAsync(callback : ()=> Promise<any>, dependencies : Array<any> = []) {
    
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [value, setvalue] = useState()

    const callbackMemorized = useCallback(
        () => {
            setloading(true)
            seterror(undefined)
            setvalue(undefined)
            callback()
                .then(setvalue)
                .catch(seterror)
                .finally(()=>setloading(false))

        },
        dependencies,
    )

    useEffect(() => {
        callbackMemorized()
    }, [callbackMemorized])

    return {loading, error, value}
};
