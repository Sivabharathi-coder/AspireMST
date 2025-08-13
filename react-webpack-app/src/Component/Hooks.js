import React, { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, createContext } from "react";

// ---------------- Context Setup ----------------
const ThemeContext = createContext();

// Reducer for useReducer example
function formReducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "RESET":
            return { name: "", email: "" };
        default:
            return state;
    }
}

export default function HooksPlayground() {
    // ---------------- useState ----------------
    const [count, setCount] = useState(0); // Counter

    // ---------------- useEffect ----------------
    const [joke, setJoke] = useState("");
    useEffect(() => {
        fetch("https://api.restful-api.dev/objects")
            .then((res) => res.json())
            // .then((data) => setJoke(data[0].name));
            .then((data) => {
                const allNames = data.map((nam) => nam.name);
                setJoke(allNames)
            })
            .catch((err) => console.err(err));
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.restful-api.dev/objects");
                const data = await res.json();
                const allNames = data.map((nam) => nam.name);
                setJoke(allNames);
            }
            catch (err) {
                console.err(err);
            }
        }
        
        fetchData();

    }, [])

    // ---------------- useContext ----------------
    const [theme, setTheme] = useState("light");

    // ---------------- useReducer ----------------
    const [formState, dispatch] = useReducer(formReducer, { name: "", email: "" });

    // ---------------- useRef ----------------
    const inputRef = useRef();
    const prevCount = useRef(count);
    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    // ---------------- useMemo ----------------
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]);

    // ---------------- useCallback ----------------
    const showAlert = useCallback(() => {
        alert(`Hello, ${formState.name || "stranger"}!`);
    }, [formState.name]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div
                style={{
                    padding: "20px",
                    backgroundColor: theme === "light" ? "#fff" : "#222",
                    color: theme === "light" ? "#000" : "#fff",
                    minHeight: "100vh",
                }}
            >
                <h1>React Hooks</h1>

                {/* useState */}
                <section>
                    <h2>useState - Counter</h2>
                    <p>Count: {count} (Prev: {prevCount.current})</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </section>

                {/* useEffect */}
                <section>
                    <h2>useEffect - Data Fetching</h2>
                    <p style={{
                        display: "inline"
                    }}>{joke}</p>
                </section>

                {/* useContext */}
                <section>
                    <h2>useContext - Theme Toggle</h2>
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        Toggle Theme
                    </button>
                </section>

                {/* useReducer */}
                <section>
                    <h2>useReducer - Form Handling</h2>
                    <input
                        ref={inputRef}
                        placeholder="Name"
                        value={formState.name}
                        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                    />
                    <input
                        placeholder="Email"
                        value={formState.email}
                        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                    />
                    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                </section>

                {/* useMemo */}
                <section>
                    <h2>useMemo - Expensive Calculation</h2>
                    <p>Double Count: {expensiveCalculation}</p>
                </section>

                {/* useCallback */}
                <section>
                    <h2>useCallback - Stable Function</h2>
                    <button onClick={showAlert}>Say Hello</button>
                </section>
            </div>
        </ThemeContext.Provider>

    );
}
