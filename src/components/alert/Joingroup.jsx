import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Joingroup() {
  return (
    <>
    <div 
      className="alert alert-info alert-dismissible fade show" 
      role="alert" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <strong style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Join Our WhatsApp Group!</strong>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Get access to free Udemy courses and connect. 🌟</p>
      <div className="mt-3">
        <a
          href="https://chat.whatsapp.com/HMBVXCYagpa5QoFpeIqgks"
          target="_blank"
          className="btn btn-success"
          role="button"
          style={{
            fontWeight: 'bold',
            backgroundColor: '#25D366',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1.2rem',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
        >
              <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
           Join Now
        </a>
      </div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      ></button>
    </div>
    <br/>
    <br/>
    </>
  );
}

export default Joingroup;
