import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Uploadorganiser() {
  // Function to open WhatsApp
  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/8107034555`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
        style={{ maxWidth: '700px', margin: '0 auto',borderRadius: '10px' }}
      >
        <strong>📚 Upload Your Study Organizer?</strong><br />
        Share it with us to help other students! 🌟

        <div className="mt-3">
          <a
            href="https://forms.gle/vt5U54dQL7NMNRjc6"
            target="_blank"
            className="btn btn-primary"
            style={{ fontWeight: 'bold' }}
          >
            🚀 Upload Your Organizer
          </a>
        </div>

        <div className="mt-3">
          <button
            className="btn"
            style={{
              backgroundColor: '#25D366',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
            }}
            onClick={openWhatsApp}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
            Share on WhatsApp
          </button>
        </div>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br />
    </>
  );
}

export default Uploadorganiser;
