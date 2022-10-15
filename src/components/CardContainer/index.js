import React from 'react'
import { useNavigate } from 'react-router-dom';
import cardData from '../../data/cardData'
import Card from '../Card/index'

import "./cardContainer.css";

function CardContainer() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="banner">
        <div className="clickable" onClick={() => navigate('/dashboard')}>
          <h1>Gearmerit</h1>
          <h1>Used Car Evaluation</h1>
        </div>
        <div className="clickable" onClick={() => navigate('/dashboard')}>
          <img
            width="300px"
            src="/Assets/login-logo.png"
            alt="logo"
            className="logo"
          />
        </div>
      </div>
      <div>
        <h2 style={{ textAlign:"center" }}>Select your Evaluation Category</h2>
      </div>
      {cardData.map(cardTerm => <Card
        key={cardTerm.id}
        detail={cardTerm.detail}
        image={cardTerm.image}
        onClick={() => navigate(`/description/${cardTerm.value}`)}
      />)}
    </div>
  )
}

export default CardContainer;
