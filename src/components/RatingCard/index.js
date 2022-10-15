import React from 'react';

import './ratingCard.css';

function RatingCard({ onClick, spot, dataKey, value, index, hideUpload, size = 5, leftText, rightText }) {
  return (
    <div className='rating-card-container'>
      {index !== null && index !== undefined && spot && <div className='spot'>
        <h1>{index + 1}. {spot}</h1>
      </div>}
       
       <form>
        {leftText}
        {[...Array(size)].map((item, index) => <button className={`shadow btn btn-${index + 1}${value === index + 1 ? ' selected' : ''}`} onClick={(e) => {
          e.preventDefault();
          onClick(dataKey, index + 1);
        }}>{index + 1}</button>)}
        {rightText}
        { !hideUpload && <button className='img-upload'>Upload Image</button>}
       </form>
       <hr className='divider shadow'/>
    </div>
  )
}

export default RatingCard;