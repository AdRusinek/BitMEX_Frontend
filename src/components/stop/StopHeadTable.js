import React, {Component} from "react";

class StopHeadTable extends Component {
    render() {
        return (
            <div>
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
