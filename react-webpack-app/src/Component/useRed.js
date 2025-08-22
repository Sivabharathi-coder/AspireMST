import React, { useState, useEffect, useRef } from "react";

function useReference() {
    const [username, setUsername] = useState("");
    const [warning, setWarning] = useState(false);

    const usernameInput = useRef(null);
    const prevUsername = useRef("");
    const timerref = useRef(null);

    useEffect(() => {
        usernameInput.current.focus();
    }, []);

    useEffect(() => {
        if (timerref.current) {
            clearTimeout(timerref.current);
        }
        timerref.current = setTimeout(() => {
            if (username.length > 10) {
                setWarning(true);
            } else {
                setWarning(false);
            }
            prevUsername.current = username;
        }, 500);

        return () => {
            if (timerref.current) {
                clearTimeout(timerref.current);
            }
        }

    }, [username]);

    return (

        <div>
            <h1>useRef </h1>
            <input
                type="text"
                ref={usernameInput}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            {warning && <p className="warning">Username is too</p>}
            <p>Previous Username: {prevUsername.current}</p>
        </div>
    )
}

export default useReference;

