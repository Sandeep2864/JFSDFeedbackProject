import React from "react";
import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";

import './StudentDashboard.css'; // Import the CSS file

const StudentLayout = ({ children }) => (
  <div>
    <StudentNavbar />
    <div className="dashboard-container">
      <StudentSidebar />
      <main>
        {children}
      </main>
    </div>
  </div>
);

export default StudentLayout;
