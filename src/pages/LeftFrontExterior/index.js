import React, { useEffect, useState } from 'react';
import app, { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom';

import RatingCard from '../../components/RatingCard/index'

import CardData from '../../data/cardData';
import RatingData from '../../data/ratingData';

import '../Rating/rating.css';

const components = [
  { label: "Front Grill", value: "front_grill", size: 3 },
  { label: "Front Bumper", value: "front_bumper", size: 4 },
  { label: "Front Number Plate", value: "front_numberplate", size: 4 },
  { label: "Front Windshield", value: "front_windshield", size: 4 },
  { label: "Front Left Fender", value: "front_left_fender", size: 4 },
  { label: "Outer Rear View Mirror Left", value: "outer_rear_view_mirror_left", size: 4 },
  { label: "Roof", value: "roof", size: 4 },
  { label: "Front Left Door", value: "front_left_door", size: 4 },
  { label: "Rear Left Door", value: "rear_left_door", size: 4 },
  { label: "Left Running Board", value: "left_running_board", size: 4 },
  { label: "Rear Left Quarter Panel", value: "rear_left_quarter_panel", size: 4 },
  { label: "Left Fender Inner-Front & Back", value: "left_fender", size: 4 },
];

function LeftFrontExterior() {
    const navigate = useNavigate();
    const { selected_card } = useParams();
    const [ userRating, setUserRating ] = useState({});

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

    return (
        <div>
            {components.map(component => { 
              return <>
                <h1 className='page-header'>{component.label}</h1>
                {
                    RatingData.map((rating, index) => <RatingCard
                        key={rating.id}
                        index={index}
                        value={userRating[rating.key]}
                        spot={rating.spot}
                        dataKey={rating.key}
                        onClick={handleCardClick}
                        size={component.size}
                    />)
                }
              </>
            })}
            
            <div style={{textAlign: 'center'}}>
                <button className='submit_button' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default LeftFrontExterior;
