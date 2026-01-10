import React, { useState } from "react";
import users from "../../users.json";

const Footer = () => {

    const [user, setUsers] = useState([]);

    const handleUsers = () => {

        setUsers(users);
        console.log("users", users);
    }

    const DeleteUsers = () => {
        setUsers([]);
    }

    const handleDelete = (index) => {
        const updatedUsers = user.filter((_, i) => i !== index)
        setUsers(updatedUsers);
    }




    return (
        <>


            <button onClick={() => handleUsers()}>Click to view Users</button>
            <button onClick={() => DeleteUsers()}>Clear Data</button>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

                {user.map((user, index) =>
                    <li style={{
                        listStyle: "none",
                    }}>{user.email} <button onClick={() => handleDelete(index)} style={{
                        width: "60px",
                        height: "50px",
                        marginTop: "10px",
                        textAlign: "center"
                    }}>del</button></li>)}
            </div>

        </>

    )
}


export default Footer;