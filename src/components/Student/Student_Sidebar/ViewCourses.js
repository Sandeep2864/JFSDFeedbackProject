// StudentCourse.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/StudentCourse.css";

const courses = [
  { id: 1, name: "JFSD", code: "101", faculty: "Dr. Smith" },
  { id: 2, name: "DSA", code: "102", faculty: "Prof. Johnson" },
  { id: 3, name: "COA", code: "103", faculty: "Dr. Allen" },
  { id: 4, name: "NPS", code: "104", faculty: "Prof. Brown" },
  { id: 5, name: "PSQT", code: "105", faculty: "Dr. Davis" },
];

const ViewCourses = () => {
  return (
    <div className="course-list-container">
      <h2>Select a Course</h2>
      <div className="course-list">
        {courses.map((course) => (
          <Link to={`/dashboard/review/${course.id}`} key={course.id} className="course-box">
            <h3>{course.name}</h3>
            <p>Code: {course.code}</p>
            <p>Faculty: {course.faculty}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ViewCourses;
