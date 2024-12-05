# React.memo
Purpose: React.memo is a higher-order component (HOC) that prevents re-renders of a functional component if its props do not change.
In the code:

const CounterControlls = memo(({onIncrement,onDecrement}) => {
    console.log("CounterControls re-rendered");
    return(
        <div>
            <button onClick={onIncrement}>Increment</button>
            <br />
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
})
CounterControlls is wrapped with memo.
This ensures that CounterControlls only re-renders when its props (onIncrement or onDecrement) change.

2. React.useCallback
Purpose: useCallback memoizes callback functions, ensuring that the same function reference is passed unless its dependencies change.
In the code:
javascript
Copy code
const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
}, [])

const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1)
}, [])
These callbacks (increment and decrement) are memoized.
The empty dependency array [] ensures that these functions are created once and retain the same reference across renders.
Why use memo and useCallback together?
Without memoization:

Every time the Counter component renders (e.g., due to state updates like name), new instances of increment and decrement would be created.
These new references would cause CounterControlls to re-render because React sees the props as "changed."
With memoization:

useCallback ensures that increment and decrement have stable references, avoiding unnecessary updates to props passed to CounterControlls.
React.memo prevents CounterControlls from re-rendering if the props (stable references) do not change.
Summary of Memoization Technique
Problem: React components re-render whenever their parent component updates, even if their props haven't changed.
Solution:
Use React.memo to avoid re-rendering functional components unless props change.
Use useCallback to ensure stable function references, preventing React from incorrectly perceiving props as changed.
In Action:
Here, CounterControlls will only re-render if onIncrement or onDecrement change, optimizing performance.
Log Output
When typing into the input field (updating name state):

Without memoization: "CounterControls re-rendered" would log repeatedly.
With memoization: "CounterControls re-rendered" does not log, proving the optimization.

# What is useMemo?
    • useMemo is a React hook used to memoize the result of a function. It helps optimize performance by avoiding recalculations of expensive operations unless their dependencies change.

Syntax

javascript
Copy code
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    1. computeExpensiveValue(a, b): A function whose result needs to be memoized.
    2. [a, b]: Dependency array. The function is only recomputed if any value in the array changes.
    • Without useMemo: The expensive computation would run on every render, even when only the name state changes.
    • With useMemo: The computation only re-runs when count changes, optimizing performance.

Difference Between useMemo and useCallback
Feature	useMemo	useCallback
Purpose	Memoizes the result of a function (a value).	Memoizes the function itself (its reference).
Return Type	Returns a value (e.g., number, array, object).	Returns a memoized function.
Usage	Used for expensive calculations to avoid recalculating on every render.	Used to prevent unnecessary re-creation of functions, which avoids child re-renders.
Dependencies	Recomputes the value only if the dependencies change.	Recreates the function reference only if the dependencies change.
Example Use Case	Computing a filtered list, sorting an array, or calculating a derived value from state/props.	Passing stable callback functions to child components (e.g., for onClick, onSubmit).
