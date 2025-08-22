import React, { useState, useEffect } from "react";


function FetchJson() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/users')

            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Users");

                }
                return response.json();
            })

            .then((data) => {
                setData(data.users);
                console.log(data.users);
                setLoading(false);
                setError(null);

            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
                setData(null);
            })
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (

        <>
            <h2>Users Data</h2>
            {
                data.map(user => (
                    <div key={user.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Age:</strong> {user.age}</p>

                    </div>
                )
                )


            }
        </>
    )





}

export default FetchJson;