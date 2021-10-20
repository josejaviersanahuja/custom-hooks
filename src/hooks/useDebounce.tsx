import {useEffect} from 'react'
import useTimeout from './useTimeout'

export default function useDebounce( callback : () => void, delay : number, dependencies: Array<any>) : void {
    
    const {clear, reset} = useTimeout(callback, delay)

    // cada vez que cambia la dependencia o estado que nos interesa del tipo any, reiniciamos el useTimeout
    // si no cambia la dependencia significa que ya podemos ejecutar la acción callback cuando el timeout llega a 0
    useEffect(() => {
        reset()
    }, [...dependencies, reset])

    // Esto evita que se ejecute el timeout en el primer renderizado.
    useEffect(() => {
        clear()
    }, [])
}