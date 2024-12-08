import React, { useState } from 'react';
import axios from 'axios';
import './AddStudentForm.css';

function AddStudentForm() {
    const [student, setStudent] = useState({
        name: '',
        rollNumber: '',
        course: '',
        email: ''
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9070/students/add', student, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                console.log('Student added:', response.data);
                alert('Student has been added successfully!');
            }
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add student. Please try again.');
        }
    };

    return (
        <div className="student-form-container">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label>Student Name:</label>
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />

                <label>Roll Number:</label>
                <input
                    type="text"
                    name="rollNumber"
                    value={student.rollNumber}
                    onChange={handleChange}
                    required
                />

                <label>Course Enrolled:</label>
                <input
                    type="text"
                    name="course"
                    value={student.course}
                    onChange={handleChange}
                    required
                />

                <label>Email Address:</label>
                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudentForm;
