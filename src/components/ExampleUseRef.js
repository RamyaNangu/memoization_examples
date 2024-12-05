
import React, { useState,useRef } from 'react'

const ExampleUseRef = () => {
    // State Variable
    let [stateVariable,setStateValue] = useState(0);
    // Normal Variable
    let noramlValue = 0;
    // useRef Variable
    const refValue = useRef(0)

    const updateNormalValue = () =>{
        noramlValue += 1
        console.log("Normal Value: ",noramlValue)
    }
    const updateState = ()=>{
        setStateValue(prevValue => prevValue+1);
        console.log("State Value: ",stateVariable)
    }
    const updateRefValue = () =>{
        refValue.current = refValue.current + 1
        console.log("Ref Value: ",refValue.current)
    }

   

  return (
    <div>
      <div>
        <h1>Noraml Variable: {noramlValue}</h1>
        <button onClick={updateNormalValue} className='bg-blue-500 text-white rounded-md p-2'>Increase Normal Value</button>
      </div>
      <div>
        <h1>State Variable: {stateVariable}</h1>
        <button onClick={updateState} className='bg-blue-500 text-white rounded-md p-2'>Increase State Value</button>
      </div>
      <div>
        <h1>UseRef Variable: {refValue.current}</h1>
        <button onClick={updateRefValue} className='bg-blue-500 text-white rounded-md p-2'>Increase Ref Value</button>
      </div>
    </div>
  )
}

export default ExampleUseRef
