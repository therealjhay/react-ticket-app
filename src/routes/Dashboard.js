import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Example stats, replace with actual data logic later
  const stats = { total: 5, open: 2, in_progress: 2, closed: 1 };

  return (
    <div className="dashboard-container">
      <h2>Ticket Dashboard</h2>
      <div className="stats-grid">
        <div className="stats-card one"><span>Total</span><strong>{stats.total}</strong></div>
        <div className="stats-card open"><span>Open</span><strong>{stats.open}</strong></div>
        <div className="stats-card in_progress"><span>In Progress</span><strong>{stats.in_progress}</strong></div>
        <div className="stats-card closed"><span>Closed</span><strong>{stats.closed}</strong></div>
      </div>
      <button onClick={() => navigate("/tickets")}>Manage Tickets</button>
      <button className="logout-btn" onClick={() => { logout(); navigate("/"); }}>Logout</button>
      <Footer />
    </div>
  );
}
