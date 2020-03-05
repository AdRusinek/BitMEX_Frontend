import React, { Component } from "react";

class WaitingTrailingStopHeadTable extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="waitingTrailingStopHeader" className="display-1 text-center ">
          Trailing stops waiting for trigger
        </h1>
        <table id="waitingTrailingStop" className="table-sm">
          <thead>
            <tr>
              <th scope="col">Numer</th>
              <th scope="col">Triggering Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Trial Value</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default WaitingTrailingStopHeadTable;
