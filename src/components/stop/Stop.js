import React, {Component} from "react";

class Stop extends Component {
    render() {
        const {stop} = this.props;
        let priceColor;

        if (stop.orderQty >= 0) {
            priceColor="positivePrice";
        } else {
            priceColor="negativePrice"
        }

        return (
            <div className="stop-table">
                <table>
                    <thead>
                    <tr>
                        <td>{stop.symbol}<div id={priceColor}/></td>
                        <td>{stop.orderQty}</td>
                        <td>{stop.price}</td>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Stop;
