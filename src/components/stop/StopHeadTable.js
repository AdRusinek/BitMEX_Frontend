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
                        <th>Stop Price</th>
                        <th>Remaining</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default StopHeadTable;
