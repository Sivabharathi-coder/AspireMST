import React, { useRef } from "react";

function UncontrolledFeedback() {
    const nameRef = useRef();
    const feedbackRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Name: ${nameRef.current.value}, Feedback: ${feedbackRef.current.value}`
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Feedback</h2>
            <input type="text" placeholder="Your Name" ref={nameRef} />
            <br />
            <textarea placeholder="Your Feedback" ref={feedbackRef}></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledFeedback;

// Uncontrolled → DOM manages value (best for simple forms, file uploads).