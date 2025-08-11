// Simulate fetching raw audio data from API (values between -1 and 1)
function fetchAudioSamples() {
    return new Float32Array([
        -0.9, 0.3, -0.1, 0.6, 0.8, -0.4, 0.2, 0.9, -0.7, 0.5
    ]);
}

function normalizeSamples(samples) {
    // Convert values to range [0, 1]
    const normalized = new Float32Array(samples.length);
    for (let i = 0; i < samples.length; i++) {
        normalized[i] = (samples[i] + 1) / 2;
    }
    return normalized;
}

const output = document.getElementById('output');
const rawSamples = fetchAudioSamples();
const normalizedSamples = normalizeSamples(rawSamples);

output.innerHTML = `<strong>Original:</strong> ${rawSamples.join(', ')}<br/>
                        <strong>Normalized:</strong> ${normalizedSamples.join(', ')}`;
