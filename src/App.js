import React from "react";
import Register from "./auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Hero from "./pages/Hero";
import Dashboard from "./pages/Dashboard";
import AccountsPage from "./pages/AccountsPage";
import BudgetingPage from "./pages/BudgetingPage";
import IncomeTrackingPage from "./pages/IncomeTrackingPage";
import SavingGoalsPage from "./pages/SavingGoalsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/budgeting" element={<BudgetingPage />} />
        <Route path="/income-tracking" element={<IncomeTrackingPage />} />
        <Route path="/saving-goals" element={<SavingGoalsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
