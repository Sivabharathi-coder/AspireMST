import { useRef } from "react";

export function createConnection() {
    return {
        connect() {
            console.log('✅ Connecting...');
        },
        disconnect() {
            console.log('❌ Disconnected.');
        }
    };
}



// const count = useRef(0);
// const [_, setRender] = useState(false);

// const increment = () => {
//     count.current += 1;
//     setRender(r => !r);
// }

// <button onClick={increment}>count</button>

