import React from "react";
import { Link } from "react-router-dom";
import './FacultyDashboard.css'; // Import the CSS file

const InstructorSidebar = () => (
  <aside className="sidebar">
    <h2>Faculty Menu</h2>
    <ul>
      <li><Link to="/instructor/manage-courses">Manage Courses</Link></li>
      <li><Link to="/instructor/upload-grades">Upload Grades</Link></li>
      <li><Link to="/instructor/view-feedback">View Feedback</Link></li>
    </ul>
  </aside>
);

export default InstructorSidebar;
