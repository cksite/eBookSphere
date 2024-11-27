import React from 'react';
import './css/Button.css';

function Button({name}) {
  return (
    <button className="myButton-btn-9">
      <span>{name}</span>
    </button>
  );
}

export default Button;
