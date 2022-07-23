import React, { useState } from "react";

function Counter1() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Hello React Redux</h1>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
        </>
    )
}

export default Counter1