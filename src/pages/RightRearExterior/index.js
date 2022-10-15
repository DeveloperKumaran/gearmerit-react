import React, { useEffect, useState } from 'react';
import app, { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom';

import RatingCard from '../../components/RatingCard/index'

import CardData from '../../data/cardData';
import RatingData from '../../data/ratingData';

import '../Rating/rating.css';

const components = [
  { label: "Rear Bumper", value: "rear_bumper" },
  { label: "Boot Lid", value: "boot_lid" },
  { label: "Rear Windscreen", value: "rear_windscreen" },
  { label: "Rear Right Quarter Panel", value: "rear_right_quarter_panel" },
  { label: "Right Running Board", value: "right_running_board" },
  { label: "Rear Right Door", value: "rear_right_door" },
  { label: "Front Right Door", value: "front_right_door" },
  { label: "Right Fender", value: "right_fender" },
  { label: "Right Outer Rear View Mirror", value: "right_outer_rear_view_mirror" },
  { label: "Bonnet", value: "bonnet" },
  { label: "Antenna", value: "antenna" },
];

function RightRearExterior() {
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

export default RightRearExterior;
