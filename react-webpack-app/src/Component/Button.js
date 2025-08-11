import React from "react";


function MyButton() {
    return (
        <button>
            Clicked
        </button>
        );
}


export default function Button() {
    return (
        <div>
            <h1>Click Below</h1>
            <MyButton />
        </div>
    );
}