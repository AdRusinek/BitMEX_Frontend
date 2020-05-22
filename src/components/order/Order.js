import React, { Component } from "react";
import {css} from "../UserDashboard.css";

class Order extends Component {
  render() {
    const { order } = this.props;

    let priceColor;

    if (order.orderQty >= 0) {
      priceColor="positivePrice";
    } else {
      priceColor="negativePrice"
    }

    return (
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <td>{order.symbol}<div id={priceColor}/></td>
              <td>{order.orderQty}</td>
              <td>{order.price}</td>
              <td>{order.leavesQty}</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Order;
