import "./index.css";

const checkboxRows = [
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'roof_upholstery', label: 'Roof Upholstery' },
  { value: 'rear_view_mirror', label: 'Rear View Mirror' },
  { value: 'glove_box', label: 'Glove Box' },
  { value: 'centre_console', label: 'Centre Console' },
  { value: 'hand_reset', label: 'Hand Reset' },
  { value: 'gear_lever', label: 'Gear Lever' },
  { value: 'steering_wheel', label: 'Steering Wheel' },
  { value: 'instrument_console', label: 'Instrument Console' },
  { value: 'odometer', label: 'Odometer' },
  { value: 'front_left_door_panel', label: 'Front Left Door Panel' },
  { value: 'front_right_door_panel', label: 'Front Right Door Panel' },
  { value: 'rear_right_door_panel', label: 'Rear Right Door Panel' },
  { value: 'rear_left_door_panel', label: 'Rear Left Door Panel' },
  { value: 'abc_pedals', label: 'A B C Pedals' },
  { value: 'interior_mats', label: 'Interior Mats' },
  { value: 'door_hinges', label: 'Door Hinges' },
  { value: 'door_scuff_panels', label: 'Door Scuff Panels' },
  { value: 'power_window_switches', label: 'Power Window Switches' },
  { value: 'headlight_switch', label: 'Headlight Switch' },
  { value: 'indicator_stalk', label: 'Indicator Stalk' },
  { value: 'wiper_stalk', label: 'Wiper Stalk' },
  { value: 'seat_belts_fr', label: 'Seat Belts FR' },
  { value: 'seat_belts_fl', label: 'Seat Belts FL' },
  { value: 'seat_belts_rr', label: 'Seat Belts RR' },
  { value: 'seat_belts_rl', label: 'Seat Belts RL' },
  { value: 'seat_belts 3rd row', label: 'Seat Belts 3rd Row', notApplicable: true },
  { value: 'air_conditioning_panel', label: 'Air Conditioning Panel' },
  { value: 'air_conditioning_vents ', label: 'Air Conditioning Vents ' },
  { value: 'head_unit_panel', label: 'Head Unit Panel' },
  { value: 'airbag_dashboard', label: 'Airbag Dashboard', notApplicable: true },
  { value: 'airbag_steering_wheel', label: 'Airbag Steering Wheel', notApplicable: true },
  { value: 'boot_release_lever', label: 'Boot Release Lever', notApplicable: true },
  { value: 'fuel_tank_release_lever ', label: 'Fuel Tank Release Lever ', notApplicable: true },
  { value: 'cabin_light_switches', label: 'Cabin Light Switches', notApplicable: true },
  { value: 'sun_visors', label: 'Sun Visors', notApplicable: true },
];

const checkboxOptions = [
  { value: 'cracks_and_tears', label: 'Cracks and Tears', },
  { value: 'scratches', label: 'Scratches', },
  { value: 'scuff_marks', label: 'Scuff Marks', },
  { value: 'perfect_condition', label: 'Perfect Condition', },
  { value: 'not_applicable', label: 'Not Applicable', optional: true},
];

export default function VehicleInteriors() {
  const renderCheckboxOptions = () => {
    return checkboxRows.map(row => {
      return <div className='checkbox_entry'>
        <label className="label" style={{ marginBottom: '16px' }}>{row.label}</label>

        {checkboxOptions.filter(option => option.optional ? row.notApplicable && option.value === 'not_applicable' : true).map(option => {
          return <div className="checkbox_row">
            <input type="checkbox" className="checkbox_input"/>
            <label className="checkbox_label">{option.label}</label>
          </div>;
        })
      }

      </div>
    });
  };

  return <div>
    <h1 className="centered page-header">Vehicle Interiors</h1>

    <div className="vehicle_interior_choices_container">
      {renderCheckboxOptions()}
    </div>

    <div className="centered">
      <button className='submit_button'>
        Submit
      </button>
    </div>
  </div>
}
