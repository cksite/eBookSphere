import React from 'react';
import './css/Price.css';

function Price({ discountedPrice, originalPrice, discountPercentage }) {
  return (
    <>
    <div className="price-container">
      <div className="discounted-price">₹{discountedPrice}</div>
      <div className="original-price">₹{originalPrice}</div>
      <div className="discount-percentage">
        <span>{discountPercentage}% off</span>
      </div>
    </div>
    <br/>
    </>
  );
}

export default Price;
