import React from 'react';

function Joingroup() {
  return (
    <>
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <strong>Join Our WhatsApp Group!</strong><br />
        Get access to free Udemy courses and connect. 🌟
        <div className="mt-3">
          <a 
            href="https://chat.whatsapp.com/HMBVXCYagpa5QoFpeIqgks" 
            target="_blank"
            className="btn btn-primary"
            role="button"
            style={{ fontWeight: 'bold' }}
          >
            🚀 Join Now
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

export default Joingroup;
