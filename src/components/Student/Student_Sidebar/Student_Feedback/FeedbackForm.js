import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
    const [feedback, setFeedback] = useState({
        course: '',
        instructor: '',
        rating: 0,
        comments: ''
    });

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9070/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Thank you for your feedback!');
                    setFeedback({
                        course: '',
                        instructor: '',
                        rating: 0,
                        comments: '',
                    });
                } else {
                    alert('Failed to submit feedback.');
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="feedback-container">
            <h2>Student Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Course Name:</label>
                <input type="text" name="course" onChange={handleChange} required />
                <label>Instructor Name:</label>
                <input type="text" name="instructor" onChange={handleChange} required />
                <label>Rating (1-5):</label>
                <input type="number" name="rating" min="1" max="5" onChange={handleChange} required />
                <label>Comments:</label>
                <textarea name="comments" onChange={handleChange}></textarea>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default FeedbackForm;