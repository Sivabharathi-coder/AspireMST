import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
    const container = document.getElementById("modal-root");
    if (!container) return null;

    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick={onClose} 
        >
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    minWidth: "300px",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button onClick={onClose} style={{ marginTop: "10px" }}>
                    Close Modal
                </button>
            </div>
        </div>,
        container
    );
}

function CreateModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1>Normal Content</h1>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <h2>I’m inside a Portal (outside App root)!</h2>
                    <p>This is the modal content.</p>
                </Modal>
            )}
        </div>
    );
}

export default CreateModal;
