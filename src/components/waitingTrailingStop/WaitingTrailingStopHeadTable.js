import React, { Component } from "react";
import {css} from "../UserDashboard.css"

class WaitingTrailingStopHeadTable extends Component {
  render() {
    return (
      <div className="trailing-table-header">
        <text>
          Waiting Trailing Stops
        </text>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Triggering Price</th>
              <th>Quantity</th>
              <th>Trial Value</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default WaitingTrailingStopHeadTable;
