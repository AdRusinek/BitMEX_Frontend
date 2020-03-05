import React, { Component } from "react";

class TrailingStopHeadTable extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="stopHeader" className="display-5 text-center ">
          Trailing Stops that are waiting to trigger
        </h1>
        <table
          id="trailingStop"
          class="table table-sm table-striped table-danger"
        >
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
export default TrailingStopHeadTable;
