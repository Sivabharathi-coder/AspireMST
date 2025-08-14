import React, { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const length = sculptureList.length;
    const [number, setNumber] = useState(0);

    function handleClick() {
        if (index >= length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1)
            console.log(length);
            console.log(index);
        }
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2><i>{sculpture.name}</i>by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>

            <hr />
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setTimeout(() => {
                    alert(number);
                }, 3000)
            }}>+5</button>
        </>
    )
}


