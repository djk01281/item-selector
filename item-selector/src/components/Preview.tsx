import React, { useState, useEffect } from 'react';
const Preview: React.FC<{selectedProp: string[]}> = (props) =>{
    const [selected, setSelected] = useState<string[]>([])
    useEffect(()=>{
        setSelected(props.selectedProp)
    }, [props.selectedProp])

    return <div className = 'Preview'>{selected.map((item)=>(
        <div>{item}</div>
    ))}</div>
}

export default Preview;