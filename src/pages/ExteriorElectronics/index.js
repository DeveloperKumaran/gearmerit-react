import "./index.css";

const checkboxRows = [
  { value: 'front_left_head_lights', label: 'Front Left Head lights', showScratches: true, hideNotApplicable: true },
  { value: 'front_right_head_lights', label: 'Front Right Head lights',  },
  { value: 'front_right_indicator', label: 'Front Right Indicator',  },
  { value: 'front_left_indicator', label: 'Front Left Indicator',  },
  { value: 'front_left_fog_lights', label: 'Front Left Fog Lights',  },
  { value: 'front_right_fog_lights', label: 'Front Right Fog Lights',  },
  { value: 'headlight_washer', label: 'Headlight Washer',  },
  { value: 'fender_indicator_left', label: 'Fender Indicator Left',  },
  { value: 'fender_indicator_right', label: 'Fender Indicator Right',  },
  { value: 'oRVM_indicator_right', label: 'ORVM Indicator Right',  },
  { value: 'oRVM_indicator_left', label: 'ORVM Indicator Left',  },
  { value: 'rear_left_tailamp', label: 'Rear Left Tailamp',  },
  { value: 'rear_right_tailamp', label: 'Rear Right Tailamp',  },
  { value: 'rear_number_plate_light', label: 'Rear Number Plate Light',  },
  { value: 'reverse_light', label: 'Reverse Light',  },
  { value: 'hazard_warning_light', label: 'Hazard Warning Light',  },
  { value: 'front_wiper', label: 'Front Wiper', hideNotApplicable: true , showSlowWorking: true },
  { value: 'rear_wiper', label: 'Rear Wiper', showSlowWorking: true },
  { value: 'front_windshield_washer', label: 'Front Windshield Washer', hideBroken: true, showMissing: true },
  { value: 'rear_windshield_washer', label: 'Rear Windshield Washer', hideBroken: true, showMissing: true },
];

const checkboxOptions = [
  { value: 'working', label: 'Working', },
  { value: 'not_working', label: 'Not Working', },
  { value: 'broken', label: 'Broken', optional: true },
  { value: 'slow_working', label: 'Slow Working', optional: true },
  { value: 'scratches', label: 'Scratches', optional: true },
  { value: 'missing', label: 'Missing', optional: true },
  { value: 'not_applicable', label: 'Not Applicable', optional: true},
];

export default function ExteriorElectricals() {
  const renderCheckboxOptions = () => {
    return checkboxRows.map(row => {
      return <div className='checkbox_entry'>
        <label className="label" style={{ marginBottom: '16px' }}>{row.label}</label>

        {
          checkboxOptions.filter(option => 
            option.optional ? 
              (!row.hideNotApplicable && option.value === 'not_applicable') ||
              (!row.hideBroken && option.value === 'broken') || 
              (row.showSlowWorking && option.value === 'slow_working') || 
              (row.showScratches && option.value === 'scratches') || 
              (row.showMissing && option.value === 'missing') : 
              true).map(option => {
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
    <h1 className="centered page-header">Exterior Electricals</h1>

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
