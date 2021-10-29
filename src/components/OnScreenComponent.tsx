import { createRef, ReactElement, useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

export default function OnScreenComponent(): ReactElement {

    const headerTwoRef = createRef<HTMLParagraphElement>()
    const visible = useOnScreen(headerTwoRef, "-300px")

    return (
        <div>
            <h1>useOnScreen hook 14</h1>
            <p style={{minHeight:"100vh", backgroundColor:"lightred"}}>
                todo el screen
            </p>
            <p ref={headerTwoRef} style={{minHeight:"100vh", backgroundColor:"lightred"}}>
                screen  paragraph 2 {visible && "IS VISIBLE"}
            </p>
        </div>
    )
}
