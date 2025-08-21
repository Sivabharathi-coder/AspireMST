import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setError(null);
                console.log("Data fetched successfully:", data);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [url]);
    return { data, loading, error };
}

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

export default function CustomHooks() {
    const [name, setName] = useLocalStorage("name", "Guest");
    const { data: users, loading, error } = useFetch("https://dummyjson.com/users");
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Custom Hooks </h1>
            <h2>useLocalStorage </h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <p>Hello, {name}!</p>
            <h2>useFetch</h2>
            {loading && <p>Loading users...</p>}
            {error && <p>Error: {error.message}</p>}
            {users && (
                <ul>
                    {users.users.slice(0, 5).map((user) => (
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                        ))}
                </ul>
            )}
            <h2>useDebounce</h2>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to search..." />
            <p>Debounced Value: {debouncedSearch}</p>
        </div>
    );
}
