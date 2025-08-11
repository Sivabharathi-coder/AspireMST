import React, { useState, useEffect } from 'react';

function WindowTracker() {


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleSize);
        console.log("Mounted Event Listen");

        return () => {
            window.removeEventListener("resize", handleSize);
            console("Unmount Event Removed ")
        }

    }, [])

    return (

        <div>
            <h2>Window Tracker: {width}px</h2>

        </div>



    )
}

export default WindowTracker;