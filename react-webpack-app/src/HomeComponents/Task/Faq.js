import React, { useState } from "react";

function FAQ() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "What is a Hook?",
            answer: "Hooks are special functions that let you use state and other React features."
        },
        {
            question: "What is useState?",
            answer: "useState is a Hook that lets you add state to functional components."
        },
        {
            question: "What is useEffect?",
            answer: "useEffect is a Hook for performing side effects like data fetching."
        }
    ];
    
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ width: "400px", margin: "20px auto" }}>
            {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>

                    <div
                        onClick={() => toggleFAQ(index)}
                        style={{
                            cursor: "pointer",
                            background: "#f2f2f2",
                            padding: "10px",
                            borderRadius: "5px"
                        }}
                    >
                        <strong>{faq.question}</strong>
                    </div>

                    {openIndex === index && (
                        <div
                            style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                marginTop: "5px",
                                background: "#fff"
                            }}
                        >
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQ;
