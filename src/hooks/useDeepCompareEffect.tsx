import {useEffect, useRef} from 'react'

import isEqual from 'lodash/fp/isEqual'

export default function useDeepCompareEffect(callback : ()=>void, dependencies : Array<any>){
    
    const currentDependenciesRef = useRef<Array<any>>()

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies
    }

    useEffect(() => {
        callback()
    }, [currentDependenciesRef.current])
}
