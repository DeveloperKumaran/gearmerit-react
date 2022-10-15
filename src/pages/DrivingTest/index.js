import RatingCard from '../../components/RatingCard';
import './index.css';

export default function DrivingTest() {
  return <div className="wheels_container">
  <h1 className="centered page-header">Driving Test</h1>
  <div className='row'>
    <label className="label">Starting Performance</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="fuel_type"/>
      <label className="checkbox_label">Good</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="fuel_type"/>
      <label className="checkbox_label">Average</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="fuel_type"/>
      <label className="checkbox_label">Bad</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Idle Stability</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="transmission"/>
      <label className="checkbox_label">Stable</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="transmission"/>
      <label className="checkbox_label">Slight Fluctuation</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="transmission"/>
      <label className="checkbox_label">Increased Idle</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="transmission"/>
      <label className="checkbox_label">Does not idle</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Noise At Idle</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="body_part"/>
      <label className="checkbox_label">No Noise</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="body_part"/>
      <label className="checkbox_label">Engine Noise</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="body_part"/>
      <label className="checkbox_label">Bearing Noise</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="body_part"/>
      <label className="checkbox_label">Exhaust Noise</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="body_part"/>
      <label className="checkbox_label">Other Noise</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Clutch Feel</label>
    <RatingCard leftText="Very Hard" rightText="Smooth" hideUpload />
  </div>

  <div className='row'>
    <label className="label">Steering Feel</label> 
    <RatingCard leftText="Very Hard" rightText="Smooth" hideUpload />
  </div>

  <div className='row'>
    <label className="label">Acceleration</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Good</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Ok</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Bad</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Braking</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Good</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Ok</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Bad</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Suspension</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Good</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Ok - Noisy</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Bad</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Automatic Gears</label>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Good</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Ok - Noisy</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Problems Present</label>
    </div>
    <div className="checkbox_row">
      <input type="checkbox" className="checkbox_input" name="insurance_type"/>
      <label className="checkbox_label">Not Applicable</label>
    </div>
  </div>

  <div className="centered">
    <button className='submit_button'>
      Submit
    </button>
  </div>
</div>
}