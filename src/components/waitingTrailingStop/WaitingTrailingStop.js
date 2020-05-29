import React, {Component} from "react";
import {css} from "../UserDashboard.css"
import {deleteTrailingStop} from "../../actions/trailingActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class WaitingTrailingStop extends Component {

    onDeleteClick(trailing_id, account_id) {
        this.props.deleteTrailingStop(trailing_id, account_id);
    }

    render() {
        const {waitingTrailingStop} = this.props;
        return (
                <div className="trailing-table">
                    <table>
                        <thead>
                        <tr>
                            <td>{waitingTrailingStop.startingPrice}</td>
                            <td>{waitingTrailingStop.quantity}</td>
                            <td>{waitingTrailingStop.trialValue}</td>
                            <td>{waitingTrailingStop.execInst}</td>
                            <td>
                                <i id="delete-trailing" className="fa fa-trash-o" aria-hidden="true"
                                    onClick={this.onDeleteClick.bind(
                                    this,
                                    waitingTrailingStop.id,
                                    waitingTrailingStop.accountId
                                )}/>
                            </td>
                        </tr>
                        </thead>
                    </table>
                </div>
        );
    }
}

WaitingTrailingStop.propTypes = {
    deleteTrailingStop: PropTypes.func.isRequired
};

export default connect(null, {deleteTrailingStop})( WaitingTrailingStop);
