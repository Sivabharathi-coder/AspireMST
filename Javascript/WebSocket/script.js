const socket = new WebSocket("wss://echo.websocket.events");

socket.onopen = () => {
    console.log("connected");
}

socket.onmessage = (event) => {
    document.getElementById("response").textContent = event.data;
    console.log("Received:", event.data);

}

function sendMessage() {
    const msg = document.getElementById("message").value;
    socket.send(msg);
}



for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


