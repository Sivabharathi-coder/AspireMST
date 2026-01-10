let worker;

function startCounting() {
    document.getElementById("output").textContent = "Output: Counting";

    // Create new worker
    worker = new Worker("worker.js");

    // Listen for message from worker
    worker.onmessage = function (event) {
        document.getElementById("output").textContent = `Output: ${event.data}`;
    };

    // Send message to worker to start
    worker.postMessage("start");
}
