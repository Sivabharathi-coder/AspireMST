const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
    console.log("Connected to server");
    socket.send("Hello from client!");
};

socket.onmessage = (event) => {
    console.log("Received:", event.data);
};

socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
};

socket.onclose = () => {
    console.log("Connection closed");
};
