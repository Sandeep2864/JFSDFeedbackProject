import React, { useState } from "react";
import axios from "axios";
import "./AddFacultyForm.css";

const AddFacultyForm = () => {
  const [facultyData, setFacultyData] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyData({ ...facultyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:9070/faculty/add", facultyData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Faculty Data Submitted:", response.data);
        alert("Faculty has been added successfully!");
        setFacultyData({ name: "", department: "", email: "", phone: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error adding faculty:", error);
      alert("Failed to add faculty. Please try again.");
    }
  };

  return (
    <div className="faculty-form-container">
      <h2>Add Faculty</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={facultyData.name}
            onChange={handleChange}
            placeholder="Enter faculty name"
            required
          />
        </label>

        <label>
          Department:
          <input
            type="text"
            name="department"
            value={facultyData.department}
            onChange={handleChange}
            placeholder="Enter department"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={facultyData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={facultyData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFacultyForm;
