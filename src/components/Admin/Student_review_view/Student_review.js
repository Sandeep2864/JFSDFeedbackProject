import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Student_review.css';

function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:9070/api/feedback');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };
        fetchFeedbacks();
    }, []);

    return (
        <div className="feedback-list-container">
            <h2>All Feedback</h2>
            {feedbacks.length > 0 ? (
                <table className="feedback-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Rating</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => (
                            <tr key={feedback.id}>
                                <td>{feedback.id}</td>
                                <td>{feedback.course}</td>
                                <td>{feedback.instructor}</td>
                                <td>{feedback.rating}</td>
                                <td>{feedback.comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No feedback available.</p>
            )}
        </div>
    );
}

export default FeedbackList;
