const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow CORS if frontend is opened via file:// or different origin

let applications = 10; // Initial fake count

// Simulate new applications every few seconds
setInterval(() => {
    applications += Math.floor(Math.random() * 3); // Add 0–2 new applications
}, 5000);

app.get("/events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const sendUpdate = () => {
        res.write(`data: ${applications}\n\n`);
    };

    // Send initial data
    sendUpdate();

    const intervalId = setInterval(sendUpdate, 3000); // Send update every 3s

    req.on("close", () => {
        clearInterval(intervalId);
    });
});

app.listen(3000, () => {
    console.log("SSE server running at http://localhost:3000");
});
