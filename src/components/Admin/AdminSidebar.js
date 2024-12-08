import React from "react";

const AdminSidebar = () => (
  <aside className="sidebar">
    <h3>Admin Menu</h3>
    <ul>
      <li><a href="#">Manage Users</a></li>
      <li><a href="/admin/view-reports">View Reports</a></li>
      <li><a href="/admin/add-student">Add Student</a></li>
      <li><a href="/admin/review-of-student">Reivew of Students</a></li>
      <li><a href="/admin/add-faculty">Add Faculty</a></li>
      <li><a href="/admin/view-faculty">view Faculty</a></li>
    </ul>
  </aside>
);

export default AdminSidebar;
