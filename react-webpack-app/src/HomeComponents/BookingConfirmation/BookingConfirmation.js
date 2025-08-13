import React from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../../properties.json";

const BookingConfirmation = () => {
    const { id } = useParams();
    const property = properties.find((p) => p.id.toString() === id);

    if (!property) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Property not found</h2>;
    }

    return (
        <div style={{
            maxWidth: "800px",
            margin: "40px auto",
            background: "#fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            borderRadius: "12px",
            overflow: "hidden"
        }}>
            <img
                src={property.image}
                alt={property.title}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />

            <div style={{ padding: "20px" }}>
                <h2 style={{ marginBottom: "10px", color: "#007bff" }}>
                    Booking Confirmed! 🎉
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                    Thank you for booking <strong>{property.title}</strong>.
                </p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> {property.price}</p>
                <p style={{ color: "#555" }}>{property.description}</p>

                <div style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "10px"
                }}>
                    <Link to="/" style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        padding: "10px 16px",
                        borderRadius: "6px",
                        textDecoration: "none"
                    }}>
                        Back to Home
                    </Link>
                    <Link to="/my-bookings" style={{
                        backgroundColor: "#28a745",
                        color: "#fff",
                        padding: "10px 16px",
                        borderRadius: "6px",
                        textDecoration: "none"
                    }}>
                        View My Bookings
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
