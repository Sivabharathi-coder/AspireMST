import React, { useState } from "react";

function Count() {

    const [count, setCount] = useState(0);

    function Increment() {
        setCount(prev => prev + 1);
    }

    function Decrement() {
        setCount( prev=> Math.max(prev - 1,0));
    }

    function Reset() {
        setCount(0);
    }
    return (

        <>
            <h1>Count: {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </>
    )

}

export default Count;
