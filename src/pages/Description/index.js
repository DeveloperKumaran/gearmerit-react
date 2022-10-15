import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import CardData from '../../data/cardData';

import './description.css'

const ignoreArr = ['wheels_tyres', 'vehicle_interiors', 'interior_electricals', 'under_the_hood', 'driving_test'];
const hideCommentsFor = ['exterior_electricals', 'vehicle_details'];
const onlyFourArr = ['right_rear_exterior', 'left_front_exterior'];

function Description() {
   const navigate = useNavigate();
   const location = useLocation();
   const { selected_card } = useParams();
   const currentRoute = location.pathname.split('/')[2];
   const onlyFour = onlyFourArr.includes(currentRoute);

   const selectedCard = CardData.find(card => card.value == selected_card);
   const shouldIgnore = ignoreArr.reduce((a, b) => {
      if(location.pathname.includes(b)) {
         return true;
      }

      if(a) {
         return true;
      }

      return false;
   }, false);

   const renderAbout = () => {
      switch(currentRoute) {
         case 'exterior_electricals':
            return <p className='inspection'>
               Have Some One operate the Electronics From inside the car Observe from the outside and fill in the details
            </p>;

         case 'vehicle_details':
            return <p className='inspection'>
               Keep Vehicle document handy while filling this section
            </p>;
            
         default:
            <>
               <p className='inspection'>While inspecting the exterior of the vehicle, please carry</p>

               <ul className='points'>
                  <li>A powerful torch,</li>
                  <li>paint thickness meter and</li>
                  <li>A micro fiber cloth</li>
               </ul>
            </>
      }
   }

   return (
      <div className='description-container'>
         <div className='description-banner'>
            <h1 className='descript-tag'>Description</h1>
            <div className="description-back-button" onClick={() => navigate('/cards')}>
               &#8249;
            </div>
         </div>

         <div className='description-imgDiv'>
            <img className='description-img' src={selectedCard.image}/>
         </div>

         <h1 className='title'>{selectedCard.detail}</h1>

         {!shouldIgnore && <>
            <div className='description-details'>
               <h2 className='about'>About : </h2>
               {renderAbout()}
            </div>

            {!hideCommentsFor.includes(currentRoute) && <div className='comment-table'>
               <div className='comment-items'>
                  <h2 className='comment-title'>Scoring Comments</h2>

                  {onlyFour ? <>
                     <div className='comment-group'>
                        <ul>
                           <li>1 - Flawless or very minor flaws</li>
                           <li>2 - Some flaws exist, but need not be repaired</li>
                           <li>3 - Has to be repaired or replaced</li>
                           <li>4 - </li>
                        </ul>
                     </div>
                  </> : <>
                     <div className='comment-group'>
                        <span>Structure:</span>
                        <ul>
                           <li>1 - Broken and very Bad condition</li>
                           <li>2 - Broken and Fixed</li>
                           <li>3 - Badly Scratched but OK</li>
                           <li>4 - Minor Scratches</li>
                           <li>5 - Flawless</li>
                        </ul>
                     </div>

                     <div className='comment-group'>
                        <span>Scratches:</span>
                        <ul>
                           <li>1 - Very Deep Scratches</li>
                           <li>2 - Deep Scratches</li>
                           <li>3 - Lots of Minor Scratches</li>
                           <li>4 - Minor Scratches</li>
                           <li>5 - No Scratches</li>
                        </ul>
                     </div>

                     <div className='comment-group'>
                        <span>Finish:</span>
                        <ul>
                           <li>1 - Has to be repainted</li>
                           <li>2 - Repainted</li>
                           <li>3 - Repainted but OK</li>
                           <li>4 - OK as it is but not perfect</li>
                           <li>5 - Perfect</li>
                        </ul>
                     </div>

                     <div className='comment-group'>
                        <span>Reworked:</span>
                        <ul>
                           <li>1 - Very bad work</li>
                           <li>3 - Reworked but OK</li>
                           <li>5 - Not Reworked or perfect rework</li>
                        </ul>
                     </div>

                     <div className='comment-group'>
                        <span>Has to be replaced:</span>
                        <ul>
                           <li>1 - Yes</li>
                           <li>5 - No</li>
                        </ul>
                     </div>
                  </>}
               </div>
            </div>}
         </>}

         <button className='btn-evaluate' onClick={() => navigate(`/rating/${selected_card}`)}>Evaluate</button>
      </div>
  )
}

export default Description;
