import React, { ReactElement } from 'react'
import useArray from '../hooks/useArray'

export default function ArrayComponent(): ReactElement {

    const {array, push, filter, update, remove, clear, } = useArray([1,2,3,4,5,6,7,8,9])

    return (
        <div>
            <h1>useArray hook 5</h1>
            <p>Array is: {array.join(', ')}</p>
            <button onClick={()=> push(10)}>Push number 10</button>
            <button onClick={()=> filter((e)=> e % 2 === 1)}>Filter odd numbers</button>
            <button onClick={()=> update(1,100)}>Replace 2nd number, now will be 100</button>
            <button onClick={()=> remove(2)}>Remove the third number</button>
            <button onClick={()=> clear()}>Empty the array</button>
        </div>
    )
}
