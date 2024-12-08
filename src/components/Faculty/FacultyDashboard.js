import React from "react";
import InstructorNavbar from "./FacultyNavbar";
import InstructorSidebar from "./FacultySidebar";
import './FacultyDashboard.css'; // Import the CSS file

const InstructorDashboard = () => (
  <div>
    <InstructorNavbar />
    <div className="dashboard-container">
      <InstructorSidebar />
      <main>
        <h2>Welcome to the Instructor Dashboard</h2>
        <p>Here you can manage your courses and view feedback.</p>
      </main>
    </div>
  </div>
);

export default InstructorDashboard;
