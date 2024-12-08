import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import './AdminDashboard.css'; // Import the CSS file

const AdminLayout = ({ children }) => (
  <div>
    <AdminNavbar />
    <div className="dashboard-container">
      <AdminSidebar />
      <main>
        {children}
      </main>
    </div>
  </div>
);

export default AdminLayout;
