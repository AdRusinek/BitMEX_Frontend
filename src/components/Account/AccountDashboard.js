import React, {Component} from 'react';
import {getAccounts} from "../../actions/accountActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Account from "./Account";
import AddAccountButton from "./AddAccountButton"
import {Link} from "react-router-dom";
import AddAlertButton from "../Alert/AddAlertButton";
import Alert from "../Alert/Alert";
import {getAlerts} from "../../actions/alertActions";
import ShowFilesButton from "../files/ShowFilesButton";
import {css} from "./AccountStyles.css";

class AccountDashboard extends Component {
    componentDidMount() {
        this.props.getAccounts();
        this.props.getAlerts();
    }

    render() {
        const {customAlerts} = this.props.customAlert;
        const {accounts} = this.props.account;
        return (
            <div className="account-dashboard container">
                <div className="row">
                    <div className="col-sm-6 accounts">
                        <AddAccountButton/>
                        {accounts.map(account => (
                            <Link id="account-link" to={`/dashboard/${account.id}`}>
                                <Account
                                    key={account.id}
                                    account={account}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="col-sm-6 alerts">
                        <AddAlertButton/>
                        {customAlerts.map(customAlert => (
                            <Alert
                                key={customAlert.id}
                                customAlert={customAlert}
                            />
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
    account: PropTypes.object.isRequired,
    getAccounts: PropTypes.func.isRequired,
    customAlert: PropTypes.object.isRequired,
    getAlerts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    account: state.account,
    customAlert: state.customAlert
});

export default connect(mapStateToProps, {getAccounts, getAlerts})(AccountDashboard);
