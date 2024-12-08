import React from 'react';
import './css/HomePage.css';

function Default() {
    return (
        <div className="home-container">
            <h1>Welcome to Student Feedback System</h1>
            <p>Help us improve by sharing your feedback.</p>
            <div className="navigation">
                <a href="/student/feedback">Student Feedback</a>
            </div>
        </div>
    );
}

export default Default;