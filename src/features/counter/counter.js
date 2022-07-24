import { useSelector, useDispatch } from "react-redux";

import React, { useState } from "react";
import { decrement, increment } from "./counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Hello React Redux</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>Count : {count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    )
}

export default Counter
