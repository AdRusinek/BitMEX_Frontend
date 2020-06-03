import React, {Component} from 'react';
import {deleteAccount, getAccounts} from "../../actions/accountActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Account from "./Account";
import AddAccountButton from "./AddAccountButton"
import {Link} from "react-router-dom";
import AddAlertButton from "../Alert/AddAlertButton";
import Alert from "../Alert/Alert";
import {getAlerts} from "../../actions/alertActions";
import {deleteAlert} from "../../actions/alertActions";
import {css} from "./AccountStyles.css";

class AccountDashboard extends Component {
    componentDidMount() {
        this.props.getAccounts();
        this.props.getAlerts();
    };

    onDeleteAlertClick(alert_id) {
        this.props.deleteAlert(alert_id);
    };

    onDeleteAccountClick(account_id) {
        this.props.deleteAccount(account_id);
    }

    render() {
        const {customAlerts} = this.props.customAlert;
        const {accounts} = this.props.account;

        function manageAddAccountButton() {
            if (accounts.length <= 2) {
                return <AddAccountButton/>
            } else {
                return (
                    <div className="exceeded-amount-account">
                        <text>Osiągnąłeś maksymalną ilość kont.</text>
                    </div>
                );
            }
        }

        function manageAddAlertButton() {
            if (customAlerts.length < 2) {
                return <AddAlertButton/>
            } else {
                return (
                    <div className="exceeded-amount-alert">
                        <text>Osiągnąłeś maksymalną ilość alertów.</text>
                    </div>
                );
            }
        }

        return (
            <div className="account-dashboard container">
                <div className="col-sm-12">

                    <div className="accounts">
                        {manageAddAccountButton()}
                        {accounts.map(account => (
                            <ul className="alerts-display">
                                <li>
                                    <Link id="account-link" to={`/dashboard/${account.id}`}>
                                        <Account
                                            key={account.id}
                                            account={account}
                                        />
                                    </Link>
                                </li>
                                <li className="account-delete">
                                    <i className="fa fa-trash-o" aria-hidden="true"
                                       onClick={this.onDeleteAccountClick.bind(this, account.id)}
                                    />
                                </li>
                            </ul>
                        ))}
                    </div>

                    <div className="alerts">
                        {manageAddAlertButton()}
                        {customAlerts.map(customAlert => (
                            <ul className="alerts-display">
                                <li>
                                <Alert
                                    key={customAlert.id}
                                    customAlert={customAlert}
                                />
                                </li>
                                <li className="alert-delete">
                                    <i className="fa fa-trash-o" aria-hidden="true"
                                       onClick={this.onDeleteAlertClick.bind(this, customAlert.id)}/>
                                </li>
                            </ul>
                        ))}
                    </div>

                </div>
                <div className="guides">
                    {/*<ShowFilesButton/>*/}
                </div>
            </div>
        );
    }
}

AccountDashboard.propTypes = {
    deleteAccount: PropTypes.func.isRequired,
    deleteAlert: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired,
    getAccounts: PropTypes.func.isRequired,
    customAlert: PropTypes.object.isRequired,
    getAlerts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    account: state.account,
    customAlert: state.customAlert
});

export default connect(mapStateToProps, {getAccounts, getAlerts, deleteAlert, deleteAccount})(AccountDashboard);
