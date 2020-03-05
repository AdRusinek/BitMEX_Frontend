import React, { Component } from "react";

class OrderHeadTable extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="ordersHeader" className="display-1 text-center ">
          Your active orders
        </h1>
        <table id="order" class="table-sm">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Quantity</th>
              <th scope="col">Order Price</th>
              <th scope="col">Remaining</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default OrderHeadTable;
