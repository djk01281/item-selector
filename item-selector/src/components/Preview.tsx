import React, { useState, useEffect } from 'react';
const Preview: React.FC<{selectedProp: string[]}> = ({selectedProp}) =>{
    const [selected, setSelected] = useState<string[]>([])
    useEffect(()=>{
        setSelected(selectedProp)
    }, [selectedProp])

    return <div className = 'Preview'>{selected.map((item)=>(
        <div>{item}</div>
    ))}</div>
}

export default Preview;