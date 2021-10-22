import { useState } from 'react'

interface useArrayInterface {
    array: Array<any>,
    push: (element:any)=> void,
    filter: (callback: (value:any, index?:number) => any) =>void,
    update: (index: number, newElement:any)=> void,
    remove: (index:number)=> void,
    clear: ()=> void,
}

export default function useArray(defaultValue : Array<any>) : useArrayInterface {

    const [array, setarray] = useState(defaultValue)

    function push(element : any){
        setarray([...array, element])
    }

    function filter(callback : (value:any, index?:number) => any){
        setarray(a=> a.filter(callback))
    }

    function update( index: number, newElement: any){
        if(index < array.length && index >= 0) {
            setarray(a=> [
                ...a.slice(0, index),
                newElement,
                ...a.slice(index+1,a.length)
            ])
        }
    }

    function remove(index:number){
        if(index < array.length && index >= 0) {
            setarray(a=>[
                ...a.slice(0,index),
                ...a.slice(index+1,a.length-1)
            ])
        }
    }

    function clear(){
        setarray([])
    }

    return { array, push, filter, update, remove, clear}
}