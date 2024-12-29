import React from 'react';

function Uploadorganiser() {
  return (
    <>
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <strong>📚 Have a Study Organizer?</strong><br />
        Upload it now to help and inspire students! Your contribution can make a real difference. 🌟
        <div className="mt-3">
          <a 
            href="https://forms.gle/vt5U54dQL7NMNRjc6" 
            target = "_blank"
            className="btn btn-primary"
            role="button"
            style={{ fontWeight: 'bold' }}
          >
            🚀 Upload Your Organizer
          </a>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br/>
      <br/>
    </>
  );
}

export default Uploadorganiser;
