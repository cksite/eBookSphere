import React from 'react';
import Button from './Button';
import './css/About.css';

const About = () => {
  return (
    <div className="about-container pt-14">
      <h1>About eBookSphere</h1> {/* Update title to reflect the new project name */}
      <div className="card-grid">
        <div className="card">
          <h3>Explore Books</h3> {/* Updated content to reflect the focus on books */}
          <p>Browse a wide range of eBooks available in various genres.</p>
          <Button name="Explore Now" /> {/* Adjust button text to reflect the new purpose */}
        </div>
        <div className="card">
          <h3>Rate eBooks</h3> {/* Updated content */}
          <p>Your feedback matters. Rate and review the eBooks you've read.</p>
          <Button name="Rate Now" />
        </div>
        <div className="card">
          <h3>Ask Questions</h3> {/* Keep as is, but relevant to books */}
          <p>Have any questions about a book or an author? Ask us anytime.</p>
          <Button name="Ask Now" />
        </div>
        <div className="card">
          <h3>More eBooks</h3> {/* Adjusted for the eBook focus */}
          <p>Discover more amazing eBooks across different categories.</p>
          <Button name="Explore More" />
        </div>
        

        <div className="card">
          <h3>Download eBooks</h3> {/* Adjusted to reflect downloading eBooks */}
          <p>Stay connected and enjoy reading anywhere with eBooks on your device!</p>
          <Button name="Download Now" />
        </div>

        <div className="card">
          <h3>Access eBooks Online</h3> {/* Updated context to accessing eBooks on the website */}
          <p>Unlock a world of books with our web version, available anytime!</p>
          <Button name="Access Now" />
        </div>
      </div>
    </div>
  );
};

export default About;
