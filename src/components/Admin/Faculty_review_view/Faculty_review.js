import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Faculty_review.css';

function FacultyReview() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:9070/faculty/all');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching faculty reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    return (
        <div className="faculty-review-container">
            <h2>All Faculty Reviews</h2>
            {reviews.length > 0 ? (
                <table className="faculty-review-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Faculty Name</th>
                            <th>Course</th>
                            <th>Rating</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr key={review.id}>
                                <td>{review.id}</td>
                                <td>{review.facultyName}</td>
                                <td>{review.course}</td>
                                <td>{review.rating}</td>
                                <td>{review.comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No faculty reviews available.</p>
            )}
        </div>
    );
}

export default FacultyReview;