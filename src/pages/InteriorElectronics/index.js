import "./index.css";

const checkboxRows = [
  { value: 'Cabin Lights Working ', label: 'Cabin Lights Working ', yesNo: true,  },
  { value: 'AC Working', label: 'AC Working', yesNo: true },
  { value: 'Heater Working', label: 'Heater Working', yesNo: true },
  { value: 'AC Recirculation Working', label: 'AC Recirculation Working', yesNo: true },
  { value: 'Audio System Working', label: 'Audio System Working', yesNo: true },
  { value: 'Speaker Working', label: 'Speaker Working', yesNo: true },
  { value: 'Bluetooth Working ', label: 'Bluetooth Working ', yesNo: true },
  { value: 'Power Windows Working', label: 'Power Windows Working', yesNo: true },
  { value: 'Rear Defogger Working', label: 'Rear Defogger Working', yesNo: true },
  { value: 'Steering Mount Controls Working', label: 'Steering Mount Controls Working', yesNo: true },
  { value: 'Check Engine Light', label: 'Check Engine Light', hidePartial: true },
  { value: 'Other Warning Lights', label: 'Other Warning Lights', hidePartial: true },
  { value: 'Fuel Guage Working', label: 'Fuel Guage Working', hidePartial: true },
  { value: 'Horn Working', label: 'Horn Working', hidePartial: true },
  { value: 'Glove Box Light Working', label: 'Glove Box Light Working', hidePartial: true },
  { value: 'Luggage Compartment Light Working', label: 'Luggage Compartment Light Working', hidePartial: true },
  { value: 'USB Port Available', label: 'USB Port Available', hideNotApplicable: true , hidePartial: true },
  { value: '12V Charging Socket Available', label: '12V Charging Socket Available', hideNotApplicable: true, hidePartial: true },
];

const checkboxOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'on', label: 'On' },
  { value: 'off', label: 'Off' },
  { value: 'partial', label: 'Partial' },
  { value: 'not_applicable', label: 'Not Applicable' },
];

export default function InteriorElectricals() {
  const renderCheckboxOptions = () => {
    return checkboxRows.map(row => {
      return <div className='checkbox_entry'>
        <label className="label" style={{ marginBottom: '16px' }}>{row.label}</label>

        {
          checkboxOptions.filter(option => 
            (!row.hideNotApplicable && option.value === 'not_applicable') ||
            (row.yesNo && (option.value === 'yes' || option.value === 'no')) || 
            (!row.yesNo && (option.value === 'on' || option.value === 'off')) || 
            (!row.hidePartial && option.value === 'partial')
          ).map(option => {
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
    <h1 className="centered page-header">Interior Electricals</h1>

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
