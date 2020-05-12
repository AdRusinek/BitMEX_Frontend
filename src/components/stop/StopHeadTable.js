import React, {Component} from "react";
import {css} from "../UserDashboard.css";

class StopHeadTable extends Component {
    render() {
        return (
            <div className="stop-table-header">
                <text>
                    Your active stops
                </text>
                <table>
                    <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Quantity</th>
                        <th>Order Price</th>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default StopHeadTable;
