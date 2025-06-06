import React, { useEffect, useState } from 'react';

function AdAlert() {
  const offerEndTimeUTC = new Date("2025-06-07T03:05:10Z").getTime();
  
  // Initialize visibility based on the initial offer end time check
  const [isVisible, setIsVisible] = useState(offerEndTimeUTC - new Date().getTime() > 0);
  const [timeLeft, setTimeLeft] = useState(Math.max(offerEndTimeUTC - new Date().getTime(), 0));

  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentTime = new Date().getTime();
      const timeRemaining = offerEndTimeUTC - currentTime;

      if (timeRemaining <= 0) {
        setIsVisible(false);
        setTimeLeft(0);
      } else {
        // setIsVisible(true);
        setTimeLeft(timeRemaining);
      }
    };

    // Run the time calculation on mount
    calculateRemainingTime();

    // Set interval to update the remaining time every second
    const interval = setInterval(calculateRemainingTime, 1000);
    
    // Cleanup the interval when the component is unmounted or after the offer ends
    return () => clearInterval(interval);
  }, []);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  if (!isVisible) return null; // Return null if the alert should not be visible

  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '15px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#FF6F61',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
      }}>
        <div style={{ marginBottom: '15px', borderRadius: '8px', overflow: 'hidden' }}>
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/144212547/original/c364e288cafe13db9037274b2881b7a0e9a5c6ea/design-a-stunning-book-promotion-banner.png" alt="Ad Banner" style={{
            width: '100%',
            height: 'auto',
            maxHeight: '200px',
            borderRadius: '8px',
            objectFit: 'cover',
            filter: 'brightness(70%)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <strong style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFD700' }}>
            🎉 Limited Time Offer!
          </strong>
          <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>
            Grab 50% OFF on your next purchase. Hurry, time is running out! 🚀
          </p>
        </div>

        <div style={{ marginTop: '15px', fontSize: '1.3rem', fontWeight: 'bold' }}>
          <span style={{ color: '#FFF' }}>Offer ends in: </span>
          <span style={{ color: '#FFD700' }}>{formatTime(timeLeft)}</span>
        </div>

        <div className="mt-2">
          <a href="https://example.com" target="_blank" className="btn btn-warning" role="button" style={{
            fontWeight: 'bold',
            backgroundColor: '#FFB600',
            border: 'none',
            padding: '10px 25px',
            fontSize: '1rem',
            borderRadius: '50px',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
          }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>🚀 Check It Out Now!</a>
        </div>

        <button type="button" className="btn-close" onClick={() => setIsVisible(false)} aria-label="Close" style={{
          position: 'absolute',
          top: '10px',
          right: '15px',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          color: 'white',
          cursor: 'pointer',
        }}></button>
      </div>
      
    </>
  );
}

export default AdAlert;
