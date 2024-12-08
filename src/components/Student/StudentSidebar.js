import React from "react";
import { Link } from "react-router-dom";
// import './StudentDashboard.css'; // Import the CSS file

const StudentSidebar = () => (
  <aside className="sidebar">
    <h2>Student Menu</h2>
    <ul>
      <li><Link to="/student/home">Home</Link></li>
      <li><Link to="/student/view-courses">View Courses</Link></li>
      {/* <li><Link to="/student/view-grades">View Grades</Link></li> */}
      <li><Link to="/student/feedback">Feedback Form</Link></li>
    </ul>
  </aside>
);

export default StudentSidebar;
