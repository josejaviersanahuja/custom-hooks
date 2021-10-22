import {useEffect, useRef} from 'react'

export default function useUpdateEffect (callback : ()=> void, dependencies : Array<any>) : void {

    // is the first time it renders (component did mount)
    const firstRenderRef = useRef(true)

    useEffect(() => {
        // if it is the first render do nothing
        if (firstRenderRef.current){
            firstRenderRef.current = false
            return
        }
        // otherwise do the callback
        return callback()
    }, [dependencies])
}