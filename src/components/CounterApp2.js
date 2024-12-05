import React, { useState,useMemo } from 'react'

const factorialOfNum = (n)=>{
    let sum = 0
    console.log("Factorial Calculated")
    for (let i = n; i > 1; i--){
        sum += i
    }

    return sum
}

const CounterApp2 = () => {
    const [value,setValue] = useState("")

    const factorialSum = useMemo(()=>factorialOfNum(10),[]);

  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
        <h1>UseMemo Example</h1>

      <div>
        <input type="text" value={value} className='border border-black' onChange={(e)=>setValue(e.target.value)} />
      </div>
      <h1>{factorialSum}</h1>
    </div>
  )
}

export default CounterApp2
