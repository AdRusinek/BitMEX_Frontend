import React, { Component } from "react";

class StopHeadTable extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="stopHeader" className="display-1 text-center ">
          Your active stops
        </h1>
        <table id="stop" class="table-sm">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Quantity</th>
              <th scope="col">Stop Price</th>
              <th scope="col">Remaining</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default StopHeadTable;
