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
                        <td>{position.symbol}<div id={priceColor}/></td>
                        <td>{position.openingQty}</td>
                        <td>{position.homeNotional}</td>
                        <td>{position.avgEntryPrice}</td>
                        <td>{position.markPrice}</td>
                        <td>{position.liquidationPrice}</td>
                        <td>{position.leverage}</td>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Position;
