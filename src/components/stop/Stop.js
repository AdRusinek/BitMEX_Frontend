import React, {Component} from "react";

class Stop extends Component {
    render() {
        const {stop} = this.props;
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>{stop.symbol}</td>
                        <td>{stop.orderQty}</td>
                        <td>{stop.stopPx}</td>
                        <td>{stop.leavesQty}</td>
                        <td>{stop.ordType}</td>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Stop;
