import React, { useEffect, useState } from "react";

import './index.css';

export default function WheelsAndTires () {
  return <div className="wheels_container">
    <h1 className="centered page-header">Wheels And Tires</h1>

    <div className='row'>
      <label className="label">Front Left Tire Brand</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">FL Tire Size</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">Front Right Tire Brand</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">F R Tire Size</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">Rear Right Tire Brand</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">RR Tire Size</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">Rear Left Tire Brand</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">RL Tire Size</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">Spare Tire Brand</label>
      <input className="input" type="text" />
    </div>

    <div className='row'>
      <label className="label">Spare Tire Size</label>
      <input className="input" type="text" />
    </div>

    <h2 className="table-header">Rim Type</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            Alloy-OE
          </th>
          <th>
            Alloy-Aftermarket
          </th>
          <th>
            Steel Rims
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Front Left
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
        </tr>

        <tr>
          <th>
            Front Right
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
        </tr>

        <tr>
          <th>
            Rear Left
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
        </tr>

        <tr>
          <th>
            Rear Right
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
        </tr>

        <tr>
          <th>
            Spare
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
        </tr>
      </tbody>
    </table>

    <h2 className="table-header">Tire Condition</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            No Damage
          </th>
          <th>
            Bulges
          </th>
          <th>
            Cuts
          </th>
          <th>
            Puncture
          </th>
          <th>
            Uneven Wear
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Front Left
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
            Front Right
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
            Rear Left
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
            Rear Right
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
            Spare
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

    <h2 className="table-header">Alloy Condition</h2>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>
            No Damage
          </th>
          <th>
            Deep Scratches
          </th>
          <th>
            Bend
          </th>
          <th>
            Slight Marks
          </th>
          <th>
            Cracked
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            Front Left
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
            Front Right
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
            Rear Left
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
            Rear Right
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
            Spare
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

    <div className="centered">
      <button className='submit_button'>
        Submit
      </button>
    </div>
  </div>
}
