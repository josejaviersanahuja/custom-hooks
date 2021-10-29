import {useState} from 'react'
import useEventListener from './useEventListener'

export default function useWindowSize(){
    const [width, setwidth] = useState(window.innerWidth)
    const [height, setheight] = useState(window.innerHeight)

    useEventListener("resize", ()=>{
        setwidth(window.innerWidth)
        setheight(window.innerHeight)
    })

    return {width, height}
}