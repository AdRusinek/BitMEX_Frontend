import React, {Component} from "react";
import {css} from "../UserDashboard.css";

class OrderHeadTable extends Component {
    render() {
        return (
            <div className="order-table-header">
                <text>
                    Your active orders
                </text>
                <table>
                    <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Quantity</th>
                        <th>Order Price</th>
                        <th>Remaining</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default OrderHeadTable;
