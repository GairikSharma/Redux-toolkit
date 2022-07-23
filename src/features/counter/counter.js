import { useSelector } from "react-redux";

import React, { useState } from "react";

function Counter() {
    const count = useSelector((state) => state.counter.count)
    return (
        <>
            <h1>Hello React Redux</h1>
            <button onClick={() => {
                
            }}>-</button>
            <span>Count : {count}</span>
            <button onClick={() => {
                
            }}>+</button>
        </>
    )
}

export default Counter