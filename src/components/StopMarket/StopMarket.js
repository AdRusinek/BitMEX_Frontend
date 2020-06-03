import React, {Component} from "react";
import {css} from "../UserDashboard.css"
import {deleteStopMarket} from "../../actions/stopMarketActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class StopMarket extends Component {

    onDeleteClick(stopMarket_id, account_id) {
        this.props.deleteStopMarket(stopMarket_id, account_id);
    }

    render() {
        const {waitingStopMarket} = this.props;
        return (
            <div className="trailing-table">
                <table>
                    <thead>
                    <tr>
                        <td>{waitingStopMarket.startingPrice}</td>
                        <td>{waitingStopMarket.quantity}</td>
                        <td>{waitingStopMarket.stopPrice}</td>
                        <td>{waitingStopMarket.execInst}</td>
                        <td>
                            <i id="delete-trailing" className="fa fa-trash-o" aria-hidden="true"
                               onClick={this.onDeleteClick.bind(
                                   this,
                                   waitingStopMarket.id,
                                   waitingStopMarket.accountId
                               )}/>
                        </td>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

StopMarket.propTypes = {
    deleteStopMarket: PropTypes.func.isRequired
};

export default connect(null, {deleteStopMarket})(StopMarket);
