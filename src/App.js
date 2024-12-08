import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AdminDashboard from "./components/Admin/AdminDashboard";
import InstructorDashboard from "./components/Faculty/FacultyDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import ViewCourse from "./components/Student/Student_Sidebar/ViewCourses";
// import Profile from "./components/Student/Student_Sidebar/profile";
import Default from "./components/Student/Student_Sidebar/Default";
import FeedbackForm from "./components/Student/Student_Sidebar/Student_Feedback/FeedbackForm";
import EmployeeList from "./components/Admin/Admin_Sidebar/EmployeeList";
import AddStudentForm from "./components/Admin/Student_form/AddStudentForm";
import Student_review from "./components/Admin/Student_review_view/Student_review";
import AddFacultyForm from "./components/Admin/Faculty_form/AddFacultyForm";
import Faculty_review from "./components/Admin/Faculty_review_view/Faculty_review";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Login
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              setUserRole={setUserRole}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated && userRole === "admin" ? (
              <AdminDashboard>
                <h1>Welcome to admin page!!</h1>
              </AdminDashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/instructor/dashboard"
          element={
            isAuthenticated && userRole === "instructor" ? (
              <InstructorDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/dashboard"
          element={
            isAuthenticated && userRole === "student" ? (
              <StudentDashboard>
                <Default />
              </StudentDashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/view-courses"
          element={
            isAuthenticated && userRole === "student" ? (
              <StudentDashboard>
                <ViewCourse />
              </StudentDashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/home"
          element={
            isAuthenticated && userRole === "student" ? (
              <StudentDashboard>
                <Default />
              </StudentDashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/feedback"
          element={
            isAuthenticated && userRole === "student" ? (
              <StudentDashboard>
                <FeedbackForm />
              </StudentDashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/view-reports"
          element={
            <AdminDashboard>
              <EmployeeList />
            </AdminDashboard>
          }
        />
        <Route
          path="/admin/add-student"
          element={
            <AdminDashboard>
              <AddStudentForm />
            </AdminDashboard>
          }
        />
        <Route
          path="/admin/review-of-student"
          element={
            <AdminDashboard>
              <Student_review />
            </AdminDashboard>
          }
        />

<Route
          path="/admin/add-faculty"
          element={
            <AdminDashboard>
              <AddFacultyForm />
            </AdminDashboard>
          }
        />
        <Route
          path="/admin/view-faculty"
          element={
            <AdminDashboard>
              <Faculty_review />
            </AdminDashboard>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
