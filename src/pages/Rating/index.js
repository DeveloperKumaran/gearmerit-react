import React, { useEffect, useState } from 'react';
import app, { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom';

import RatingCard from '../../components/RatingCard/index'

import CardData from '../../data/cardData';
import RatingData from '../../data/ratingData';

import './rating.css';

function Rating() {
    const navigate = useNavigate();
    const { selected_card } = useParams();
    const [ userRating, setUserRating ] = useState({});

    useEffect(() => {
        const selectedCard = CardData.find(card => card.value == selected_card);

        if (!selectedCard) {
            navigate('/cards');
        }

        if(!localStorage.getItem('user')) {
            navigate('/login');
        }
    }, [ navigate, selected_card ]);

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user : null;

    const handleCardClick = async (key, value) => {
        setUserRating(prev => ({
            ...prev,
            [key]: value,
        }));
    }

    const handleSubmit = async () => {
        try {
            await setDoc(doc(db, `parts`, `data--${new Date().toISOString()}`), {
                ...userRating,
                user: user.email,
                date_time: new Date().toISOString(),
                type: selected_card,
            });

            navigate('/cards');
        } catch (e) {
            console.log(e);
        }
    }

    if (!user) {
        return null;
    }

    const selectedCard = CardData.find(card => card.value == selected_card);

    return (
        <div>
            <h1 className='page-header'>{selectedCard.detail}</h1>
            {
                RatingData.map((rating, index) => <RatingCard
                    key={rating.id}
                    index={index}
                    value={userRating[rating.key]}
                    spot={rating.spot}
                    dataKey={rating.key}
                    onClick={handleCardClick}
                />)
            }
            <div style={{textAlign: 'center'}}>
                <button className='submit_button' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Rating;
