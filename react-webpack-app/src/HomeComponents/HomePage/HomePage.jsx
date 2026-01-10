import React from "react";
import { useParams } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";
import PropertyList from "../PropertyCard/PropertyCard";
import Footer from "../Footer/footer";
import BookingConfirmation from "../BookingConfirmation/BookingConfirmation";

const HomePage = ({ showBooking }) => {
    const { id } = useParams();

    return (
        <>
            <HomeNavbar />
            {showBooking && id ? <BookingConfirmation /> : <PropertyList />}
            <Footer />
        </>
    );
};

export default HomePage;
