onmessage = function (e) {
    const text = e.data;
    const wordCount = text
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;

    postMessage(wordCount);
};
