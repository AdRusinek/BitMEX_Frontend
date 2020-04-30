import React, {Component} from "react";

class OrderHeadTable extends Component {
    render() {
        return (
            <div>
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
