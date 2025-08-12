import React from "react";

const PropertyCard = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", boxShadow: "0 4px 10px rgb(0 0 0 / 0.1)", borderRadius: "8px", overflow: "hidden" }}>
      <img 
        src="https://images.unsplash.com/photo-1600585154187-5561e4ec6a02?auto=format&fit=crop&w=800&q=80" 
        alt="Modern House" 
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div style={{ padding: "20px" }}>
        <h2>Modern Family House</h2>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <p><strong>Price:</strong> $1,200,000</p>
        <p>This beautiful modern family house has 4 bedrooms, 3 bathrooms, a spacious backyard, and is located near schools and parks.</p>
      </div>
    </div>
  );
};

export default PropertyCard;
