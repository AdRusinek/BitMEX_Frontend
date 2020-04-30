import React, { Component } from "react";

class Order extends Component {
  render() {
    const { order } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>{order.symbol}</td>
              <td>{order.orderQty}</td>
              <td>{order.price}</td>
              <td>{order.leavesQty}</td>
              <td>{order.ordType}</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Order;
