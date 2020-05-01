import React, { Component } from "react";
import {css} from "../UserDashboard.css"

class WaitingTrailingStop extends Component {
  render() {
    const { waitingTrailingStop } = this.props;
    return (
      <div className="trailing-table">
        <table>
          <thead>
            <tr>
              <td>{waitingTrailingStop.id}</td>
              <td>{waitingTrailingStop.startingPrice}</td>
              <td>{waitingTrailingStop.quantity}</td>
              <td>{waitingTrailingStop.trialValue}</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default WaitingTrailingStop;
