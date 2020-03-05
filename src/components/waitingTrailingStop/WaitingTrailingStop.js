import React, { Component } from "react";

class WaitingTrailingStop extends Component {
  render() {
    const { waitingTrailingStop } = this.props;
    return (
      <div className="container">
        <table id="waitingTrailingStop" class="table-sm">
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
