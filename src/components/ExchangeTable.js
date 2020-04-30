import React, {Component} from "react";
import {css} from "./UserDashboard.css"

class ExchangeTable extends Component {
    render() {
        return (
            <div className="exchange-list">
                <ul>
                    <li>
                        <button>Position</button>
                    </li>
                    <li>
                        <button>Orders</button>
                    </li>
                    <li>
                        <button>Stops</button>
                    </li>
                    <li>
                        <button>Waiting TS</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ExchangeTable;
