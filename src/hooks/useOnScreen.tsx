import {RefObject, useEffect, useState} from 'react'

export default function useOnScreen(ref : RefObject<HTMLElement>, rootMargin : string){
    const [isVisible, setisVisible] = useState(false)

    useEffect(() => {
        console.log(ref.current)
        if (ref.current == null) return

        const observer = new IntersectionObserver(
            ([entry]) => setisVisible(entry.isIntersecting),
            {rootMargin}
        )

        observer.observe(ref.current)
        return () => {
            if (ref.current == null) return
            observer.unobserve(ref.current)
        }
    }, [ref.current, rootMargin])

    return isVisible
}