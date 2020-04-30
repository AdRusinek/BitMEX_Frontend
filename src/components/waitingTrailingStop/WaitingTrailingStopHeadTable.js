import React, { Component } from "react";

class WaitingTrailingStopHeadTable extends Component {
  render() {
    return (
      <div>
        <text>
          Trailing stops waiting for trigger
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
