import React from 'react';
import Button from './Button';
import './css/Services.css';

const Services = () => {
  return (
    <div className="services-container pt-14">
      <h1>Our Services</h1>
      <div className="card-grid">

        <div className="card">
          <h3>Udemy Free Courses</h3>
          <p>Discover free courses in programming, design, marketing, and more!</p>
          <a
            href="https://chat.whatsapp.com/HMBVXCYagpa5QoFpeIqgks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="Connect Now" />
          </a>
        </div>

        <div className="card">
          <h3>Upload Organizer</h3> {/* Change context to uploading books */}
          <p>Share your Organizer with the community by uploading them here.</p>
          <a
            href="https://forms.gle/vt5U54dQL7NMNRjc6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="Upload Now" />
          </a>
          
        </div>

        <div className="card">
          <h3>E-book Collection</h3>
          <p>Access a wide range of educational e-books curated for your needs.</p>
          <Button name="Explore E-books" />
        </div>

        <div className="card">
          <h3>Study Materials</h3>
          <p>Download comprehensive study materials to aid your learning.</p>
          <Button name="View Materials" />
        </div>

        <div className="card">
          <h3>Personalized Support</h3>
          <p>Get personalized assistance for your academic queries.</p>
          <Button name="Get Support" />
        </div>

        <div className="card">
          <h3>Online Tutorials</h3>
          <p>Join our interactive online tutorials to enhance your skills.</p>
          <Button name="Join Now" />
        </div>

        <div className="card">
          <h3>Resource Sharing</h3>
          <p>Share and access valuable educational resources with others.</p>
          <Button name="Share Resources" />
        </div>

        <div className="card">
          <h3>Feedback and Suggestions</h3>
          <p>Your feedback helps us improve our services. Let us know!</p>
          <Button name="Provide Feedback" />
        </div>
      </div>
    </div>
  );
};

export default Services;
