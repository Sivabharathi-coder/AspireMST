import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/Dashboard";
import WindowTracker from "./Component/WindowTracker";
import JobList from "./Component/JobList";
import ForgotPassword from "./Components/ForgotPassword";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Components/ProfilePage";
import PropertyCard from "./HomeComponents/PropertyCard/PropertyCard";
import HooksPlayground from "./Component/Hooks";
import HomePage from "./HomeComponents/HomePage/HomePage";
import BookingConfirmation from "./HomeComponents/BookingConfirmation/BookingConfirmation";
import PropertyDetails from "./HomeComponents/PropertyDetails/PropertyDetails";
import Footer from "./HomeComponents/Footer/import";
import Gallery from "./HomeComponents/sculptureList/sculptureList";
import PayMini from "./HomeComponents/payments/payment";
import store from "./Redux/store";
import { Provider } from "react-redux";
import GridTable from "./Components/FormElements";
import FragmentExample from "./Components/Fragment";
import Cart from "./Components/LiftingStateUp";
import CustomHooks from "./Component/CustomHooks/CustomHooks";
import UserProvider from "./Component/useContext";
import UseReference from "./Component/useRed";
import "./index.css"
import Count from "./HomeComponents/Task/count";
import FetchJson from "./HomeComponents/Task/fetchJSON";
import FAQ from "./HomeComponents/Task/Faq";
import CreateModal from "./HomeComponents/Modal/createPortal";
import LiftingStateWithHooks from "./HomeComponents/LiftingStateUp/liftingstateup";
import ControlledLogin from "./HomeComponents/ControlledComp/ControlledComponenets";
import UncontrolledFeedback from "./HomeComponents/ControlledComp/UncontrolledComp";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/WindowTracker" element={<WindowTracker />} />
                <Route path="/JobList" element={<JobList />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/homebooking" element={<PropertyCard />} />
                <Route path="/hooksPlayground" element={<HooksPlayground />} />
                <Route path="/homenavbar" element={<HomePage />} />
                <Route path="/booking/:id" element={<BookingConfirmation />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/importFooter" element={<Footer />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/PayMini" element={<PayMini />} />
                <Route path="/fragment" element={<FragmentExample />} />
                <Route path="/gridtable" element={<GridTable />} />
                <Route path="/liftingStateUp" element={<Cart />} />
                <Route path="/customHooks" element={<CustomHooks />} />
                <Route path="/useContext" element={<UserProvider />} />
                <Route path="/useReferen" element={<UseReference />} />
                <Route path="/count" element={<Count />} />
                <Route path="/fetchJson" element={<FetchJson />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/liftingState" element={<LiftingStateWithHooks />} />
                <Route path="/modal" element={<CreateModal />} />
                <Route path="/controlledlogin" element={<ControlledLogin />} />
                <Route path="/uncontrolledFeedback" element={<UncontrolledFeedback />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
