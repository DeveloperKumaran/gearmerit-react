import React from 'react';

import './card.css'

function Card({ detail, image, onClick }) {
  return (
    <div className='card-container shadow' onClick={onClick}>
      <div className='card'>
        <h1 className='catogery'>{detail}</h1>
        <img className='detail-logo' src={image} alt="logo" />
      </div>
    </div>
  )
}

export default Card;
