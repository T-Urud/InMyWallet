import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Take control of your financial future with a personal manager who
              simplifies your finances, optimizes your expenses and maximizes
              your savings.
            </p>
            <button className="btn btn-primary">
              <span>
                <Link to="/dashboard">Jump In !</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
