import React, { useState, useCallback } from "react";

// Child component memoized
const ChildButton = React.memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click Me</button>;
});

export default function App() {
    const [count, setCount] = useState(0);

    // useCallback ensures same function reference between renders
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []);

    return (
        <div>
            <h3>Parent Count: {count}</h3>
            <button onClick={() => setCount(c => c + 1)}>Increment Parent</button>
            <ChildButton onClick={handleClick} />
        </div>
    );
}
// useCallback → Memoizes functions to prevent unnecessary re-renders of child components.
