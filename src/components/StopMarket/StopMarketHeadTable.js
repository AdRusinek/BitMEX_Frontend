import React, { Component } from "react";
import {css} from "../UserDashboard.css"

class StopMarketHeadTable extends Component {
    render() {
        return (
            <div className="trailing-table-header">
                <text>
                    Waiting Stop Market Orders
                </text>
                <table>
                    <thead>
                    <tr>
                        <th>Triggering Price</th>
                        <th>Quantity</th>
                        <th>Stop Price</th>
                        <th>Execution Instructions</th>
                        <th>Delete Stop Market</th>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
export default StopMarketHeadTable;
