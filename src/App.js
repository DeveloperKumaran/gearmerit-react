import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

import Login from "./Login";
import Loggedin from "./Loggedin";

import CardContainer from "./components/CardContainer/index";

import Rating from "./pages/Rating/index";
import WheelsAndTires from "./pages/WheelsAndTires/index";
import Dashboard from "./pages/Dashboard/index";
import Description from "./pages/Description/index";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleInteriors from "./pages/VehicleInteriors";
import ExteriorElectricals from "./pages/ExteriorElectronics";
import InteriorElectricals from "./pages/InteriorElectronics";
import UnderTheHood from "./pages/UnderTheHood";
import DrivingTest from "./pages/DrivingTest";
import RightRearExterior from "./pages/RightRearExterior";

import "./App.css";
import LeftFrontExterior from "./pages/LeftFrontExterior";

const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App(){
  const returnInitialValues = () => {
    try {
      if(localStorage.getItem('user'))
        return JSON.parse(localStorage.getItem('user'))
        
      return null;
    } catch(e) {
      console.log(e);
      return null;
    }
  };

  const [ user, setUser ] = useState(returnInitialValues());

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');

      if(storedUser) {
        const user = JSON.parse(storedUser);
        setUser(user);
      }
    } catch(e) {}
  }, []);

  return(
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login"  element={<Loggedin setUser={setUser}/>} />
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path="/cards" element={<CardContainer />} />
          <Route path="/description/:selected_card" element={<Description />} />
          <Route path="/dashboard" element = {<Dashboard user={user}/>} />
          <Route path="/rating/driving_test" element={<DrivingTest />} />
          <Route path="/rating/exterior_electricals" element={<ExteriorElectricals />} />
          <Route path="/rating/interior_electricals" element={<InteriorElectricals />} />
          <Route path="/rating/left_front_exterior" element={<LeftFrontExterior />} />
          <Route path="/rating/right_rear_exterior" element={<RightRearExterior />} />
          <Route path="/rating/under_the_hood" element={<UnderTheHood />} />
          <Route path="/rating/vehicle_details" element={<VehicleDetails />} />
          <Route path="/rating/vehicle_interiors" element={<VehicleInteriors />} />
          <Route path="/rating/wheels_tyres" element={<WheelsAndTires />} />
          <Route path="/rating/:selected_card" element={<Rating />} />
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
