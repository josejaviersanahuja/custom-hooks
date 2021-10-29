import React, { ReactElement } from 'react'
import useWindowSize from '../hooks/useWindowSize'

export default function WindowSizeComponent(): ReactElement {

    const {width, height} = useWindowSize()

    return (
        <div>
            <h1>useWindowSize hook 15</h1>
            <p>{width} x {height}</p>
        </div>
    )
}
