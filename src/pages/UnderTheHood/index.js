import React, { useEffect, useState } from "react";

import './index.css';

export default function UnderTheHood () {
  return <div className="wheels_container">
    <h1 className="centered page-header">Under The Hood</h1>

    <h2 className="table-header">Structural</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            Intact
          </th>
          <th>
            Rusted
          </th>
          <th>
            Repaired
          </th>
          <th>
            Bad Repair
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Left Apron
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Right Apron
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Top Cross Member
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="table-header">Heat Exchangers</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            Intact
          </th>
          <th>
            Bent
          </th>
          <th>
            Repaired
          </th>
          <th>
            Painted
          </th>
          <th>
            Unable to evaluate
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Radiator
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Condenser
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Intercooler
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Oil Cooler
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="table-header">Fluids</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            Ok
          </th>
          <th>
            Top Up
          </th>
          <th>
            Very Low
          </th>
          <th>
            Quality Ok
          </th>
          <th>
            Quality Bad
          </th>
          <th>
            Quality Worst
          </th>
          <th>
            Not Applicable
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Coolant
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Engine Oil
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Brake Fluid
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Clutch Fluid
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Power Steering Fluid
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Windshield Washer
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="table-header">Hoses</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            Ok
          </th>
          <th>
            Slightly damaged
          </th>
          <th>
            Repaired
          </th>
          <th>
            Broken
          </th>
          <th>
            NA
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Fuel
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Brake
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Coolant
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>

        <tr>
          <th>
            Vacuum
          </th>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
          <td>
            <input type="checkbox" className="table_checkbox_input"/>
          </td>
        </tr>
      </tbody>
    </table>

    <div className='checkbox_entry'>
      <label className="label" style={{ marginBottom: '16px' }}>Battery Visual Check</label>
        <div className="checkbox_row">
          <input type="checkbox" className="checkbox_input"/>
          <label className="checkbox_label">Perfect</label>
        </div>

        <div className="checkbox_row">
          <input type="checkbox" className="checkbox_input"/>
          <label className="checkbox_label">Terminal Corroded</label>
        </div>

        <div className="checkbox_row">
          <input type="checkbox" className="checkbox_input"/>
          <label className="checkbox_label">Bulge</label>
        </div>

        <div className="checkbox_row">
          <input type="checkbox" className="checkbox_input"/>
          <label className="checkbox_label">Battery Dead</label>
        </div>
    </div>

    <div className='checkbox_entry'>
      <label className="label" style={{ marginBottom: '16px' }}>Engine Cover</label>
      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Yes</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">No</label>
      </div>
    </div>

    <div className='checkbox_entry'>
      <label className="label" style={{ marginBottom: '16px' }}>Engine Guard</label>
      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Yes</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">No</label>
      </div>
    </div>

    <div className='checkbox_entry'>
      <label className="label" style={{ marginBottom: '16px' }}>Air Filter Condition</label>
      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Good</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Ok</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Needs Replacement</label>
      </div>
    </div>

    <div className='checkbox_entry'>
      <label className="label" style={{ marginBottom: '16px' }}>Engine Wiring Harness</label>
      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Perfect</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Some Repairs Done</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Rat Bites</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Corrosion</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">Shoddy Repair</label>
      </div>

      <div className="checkbox_row">
        <input type="checkbox" className="checkbox_input"/>
        <label className="checkbox_label">After-market Wiring</label>
      </div>
    </div>

    <div className="centered">
      <button className='submit_button'>
        Submit
      </button>
    </div>
  </div>
}
