import React, {Component} from "react";

class Position extends Component {
    render() {
        const {position} = this.props;

        let priceColor;

        if (position.currentQty >= 0) {
            priceColor="positivePrice";
        } else {
            priceColor="negativePrice"
        }

        return (
            <div className="position-table">
                <table>
                    <thead>
                    <tr>
                        <td><div id={priceColor}/>{position.symbol}</td>
                        <td>{position.currentQty}</td>
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
