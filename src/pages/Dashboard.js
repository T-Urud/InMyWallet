import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Main from "../components/MainDashboard";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="global-grid">
      <Header />
      <Navigation />
      <main className="area-main my-4 p-2 px-6">
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
