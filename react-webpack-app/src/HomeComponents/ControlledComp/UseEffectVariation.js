import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // 1. Run once on mount
    useEffect(() => {
        console.log("Component mounted - fetch initial data here");
    }, []);

    // 2. Run when count changes
    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    // 3. Run on every render
    useEffect(() => {
        console.log("Render happened");
    });

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Type name" />
            <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
        </div>
    );
}
