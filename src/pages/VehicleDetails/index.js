import './index.css';

export default function VehicleDetails() {
  return <div className="wheels_container">
  <h1 className="centered page-header">Vehicle Details</h1>

  <div className='row'>
    <label className="label">Year of Manufacture</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Make</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Model</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Variant</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Fuel Type</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="fuel_type"/>
      <label className="radio_label">Petrol</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="fuel_type"/>
      <label className="radio_label">Diesel</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="fuel_type"/>
      <label className="radio_label">Petrol + LPG</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="fuel_type"/>
      <label className="radio_label">Petrol + CNG</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="fuel_type"/>
      <label className="radio_label">HEV</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="fuel_type"/>
      <label className="radio_label">EV</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Transmission</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="transmission"/>
      <label className="radio_label">Manual</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="transmission"/>
      <label className="radio_label">Automatic</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="transmission"/>
      <label className="radio_label">AMT</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="transmission"/>
      <label className="radio_label">Imt</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="transmission"/>
      <label className="radio_label">Other</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Color as Per Books</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Body Part</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="body_part"/>
      <label className="radio_label">Hatchback</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="body_part"/>
      <label className="radio_label">Sedan</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="body_part"/>
      <label className="radio_label">SUV</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="body_part"/>
      <label className="radio_label">MUV</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="body_part"/>
      <label className="radio_label">Sports</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="body_part"/>
      <label className="radio_label">Others</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Registration Number</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Chassis Number / VIN Number</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">KM on Odometer</label>
    <input className="input" type="text" />
  </div>

  <div className='row'>
    <label className="label">Insurance Type</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="insurance_type"/>
      <label className="radio_label">Comprehensive</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="insurance_type"/>
      <label className="radio_label">Zero Depreciation</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="insurance_type"/>
      <label className="radio_label">Third Party</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="insurance_type"/>
      <label className="radio_label">NA</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Insurance Expiry</label>
    <input className="date_input" type="date" />
  </div>

  <div className='row'>
    <label className="label">Factory Warranty</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="factory_warranty"/>
      <label className="radio_label">Yes</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="factory_warranty"/>
      <label className="radio_label">No</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="factory_warranty"/>
      <label className="radio_label">Can be purchased</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Flood Damage - Owner Answer</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="flood_damage"/>
      <label className="radio_label">Yes</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="flood_damage"/>
      <label className="radio_label">No</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="flood_damage"/>
      <label className="radio_label">Partial</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Major Accident - Owner Answer</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="major_accident"/>
      <label className="radio_label">Yes</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="major_accident"/>
      <label className="radio_label">No</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="major_accident"/>
      <label className="radio_label">Don't know</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">RC Validity</label>
    <input className="date_input" type="date" />
  </div>

  <div className='row'>
    <label className="label">RC Status</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="rc_status"/>
      <label className="radio_label">Original</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="rc_status"/>
      <label className="radio_label">Duplicate</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="rc_status"/>
      <label className="radio_label">Not Available</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="rc_status"/>
      <label className="radio_label">Don't know</label>
    </div>
  </div>

  <div className='row'>
    <label className="label">Bank Hypothecation</label>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="bank"/>
      <label className="radio_label">Yes</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="bank"/>
      <label className="radio_label">No</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="bank"/>
      <label className="radio_label">Yes - NOC Available</label>
    </div>
    <div className="radio_row">
      <input type="radio" className="radio_input" name="bank"/>
      <label className="radio_label">Yes - NOC not available</label>
    </div>
  </div>

  <div className="centered">
    <button className='submit_button'>
      Submit
    </button>
  </div>
</div>
}