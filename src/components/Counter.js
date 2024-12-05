import { useState,useCallback,memo } from "react"

const CounterControlls = memo(({onIncrement,onDecrement}) => {
    console.log("CounterControls re-rendered");

    return(
        <div >
            <button onClick={onIncrement} className="m-3 bg-blue-100">Increment</button>
            <button onClick={onDecrement} className="m-3 bg-blue-100">Decrement</button>
        </div>
    )
})

const Counter = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")

    const increment = useCallback(() =>{
        setCount(prevCount => prevCount + 1)
    },[])

    const decrement = useCallback(() =>{
        setCount(prevCount => prevCount - 1)
    },[])

    return(
        <div className="flex flex-col justify-center items-center bg-gray-300">
            <h1 className="text-xl">Memoization Techniques Examples</h1>
            <h1>Memo,useCallback</h1>
            <h1>Count : {count}</h1>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="border border-black"/>
            <CounterControlls onIncrement={increment} onDecrement={decrement} />
        </div>
    )
}

export default Counter