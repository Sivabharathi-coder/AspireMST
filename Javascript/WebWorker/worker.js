self.onmessage = function (event) {
    if (event.data === "start") {
        let count = 0;
        for (let i = 0; i <= 100000; i++) {
            count = i;
        }
        postMessage(count);
    }
};


self.onmessage = function (event) {
    if (event.data === "start") {
        let count = 0;
        for (let i = 0; i <= 100000; i++) {
            count = i;
        }
    }

    postMessage(count);
}

worker.onmessage = function (event) {


}

worker.postMessage("start");


worker = new Worker("worker.js");

worker.onmessage = function (event) {
    event.data
}
worker.postMessage("start")


self.onmessage = function (event) {
    if (event.data = "start") {
        let count = 0;
        for (let )
            {
                count = i
            }
        postMessage(count);
    }
}