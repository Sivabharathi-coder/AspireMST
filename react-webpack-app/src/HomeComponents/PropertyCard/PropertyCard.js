// PropertyCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import properties from "../../properties.json";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/property/${property.id}`);
  };
  const handleBookNow = (e) => {
    e.stopPropagation();

    navigate(`/booking/${property.id}`);
  };

  return (
    <div
      onClick={goToDetails}

      style={{
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "18%",
        marginBottom: "10px",
        marginTop: "25px",
        cursor:"pointer"
      }}
    >
      <img
        src={property.images[0]}
        alt={property.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px", flexGrow: 1 }}>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "1rem" }}>{property.title}</h3>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <p style={{ fontSize: "0.85rem", color: "#555" }}>
          {property.description}
        </p>
      </div>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <button
          onClick={handleBookNow}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.9rem"
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const PropertyList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "10px"
      }}
    >
      {properties.map((prop) => (
        <PropertyCard key={prop.id} property={prop} />
      ))}
    </div>
  );
};

export default PropertyList;
