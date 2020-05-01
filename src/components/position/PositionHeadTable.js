import React, { Component } from "react";
import {css} from "../UserDashboard.css"

class PositionHeadTable extends Component {
  render() {
    return (
      <div className="position-table-header">
        <text>
          Your active position
        </text>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Size</th>
              <th>Entry Price</th>
              <th>Mark Price</th>
              <th>Liq. Price</th>
              <th>Margin</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default PositionHeadTable;
