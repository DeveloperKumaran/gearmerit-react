import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where, deleteDoc } from 'firebase/firestore';

import CardData from '../../data/cardData';
import RatingData from '../../data/ratingData';
import { db } from '../../firebase';

import './dashboard.css';

export default function Dashboard (props) {
  const navigate = useNavigate();
  const [ data, setData ] = useState([]);
  const [ queryDocs, setQueryDocs ] = useState({});

  useEffect(() => {
    const partsRef = collection(db, "parts");
    const q = query(partsRef, where("user", "==", props.user.user.email));
     
    getDocs(q).then(querySnapshot => {  
      setData(querySnapshot.docs.map(doc => doc.data()));
      setQueryDocs(querySnapshot.docs);
    });
  }, []);

  const handleReset = () => {
    Promise.all(queryDocs.map(doc => {
      return deleteDoc(doc.ref);
    })).then(() => {
      window.location.reload();
    });
  }
  
  return <div>
    <div className="dashboard_banner">
      <h1 className="dashboard_title">Dashboard</h1>
      <div className="dashboard_banner_button_wrapper">
        <button className="dashboard_banner_button" onClick={() => navigate('/cards')}>Go to Cards</button>
        <button className="dashboard_banner_button" onClick={handleReset}>Reset</button>
      </div>
    </div>
    {data.length ? <table id="dashboard">
      <thead>
        <tr>
          <th>
            Date
          </th>
          <th>
            Part Type
          </th>
          <th>
            Structure
          </th>
          <th>
            Scratches
          </th>
          <th>
            Finish
          </th>
          <th>
            Reworked
          </th>
          <th>
            Has To Be Replaced
          </th>
          <th>
            Average
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => {
          const card = CardData.find(c => c.value === d.type);
          let average = 0;

          RatingData.forEach(rating => {
            if(average) {
              if(d[rating.key]) {
                average = (average + d[rating.key]) / 2;
              }
            } else {
              if(d[rating.key]) {
                average = d[rating.key];
              }
            }
          });
          
          return <tr>
            <td>
              {new Date(d.date_time).toLocaleString()}
            </td>
            <td>
              {card?.detail}
            </td>
            <td>
              {d.scratches}
            </td>
            <td>
              {d.structure}
            </td>
            <td>
              {d.finish}
            </td>
            <td>
              {d.reworked}
            </td>
            <td>
              {d.needs_replacement}
            </td>
            <td>
              {average.toFixed(1)}
            </td>
          </tr>
        })}
      </tbody>
    </table> : null}
  </div>
}