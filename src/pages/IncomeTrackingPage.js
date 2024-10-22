import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Main from "../components/MainDashboard";
import Footer from "../components/Footer";

const IncomeTrackingPage = () => {
  return (
    <div className="global-grid">
      <Header />
      <Navigation />
      <main className="area-main my-4 p-2"></main>
      <Footer />
    </div>
  );
};

export default IncomeTrackingPage;
