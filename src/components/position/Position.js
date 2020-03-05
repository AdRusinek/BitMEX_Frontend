import React, { Component } from "react";

class Position extends Component {
  render() {
    const { position } = this.props;
    return (
      <div className="container">
        <table id="positions" class="table-sm">
          <thead>
            <tr>
              <td>{position.symbol}</td>
              <td>{position.currentQty}</td>
              <td>{position.lastValue}</td>
              <td>{position.avgEntryPrice}</td>
              <td>{position.markPrice}</td>
              <td>{position.liquidationPrice}</td>
              <td>{position.maintMargin}</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Position;
