import React, { Component } from "react";

class PositionHeadTable extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="positionHeader" className="display-1 text-center ">
          Your active position
        </h1>
        <table id="positions" class="table-sm">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Size</th>
              <th scope="col">Value</th>
              <th scope="col">Entry Price</th>
              <th scope="col">Mark Price</th>
              <th scope="col">Liq. Price</th>
              <th scope="col">Margin</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default PositionHeadTable;
