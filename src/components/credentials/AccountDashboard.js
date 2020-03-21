import React, {Component} from 'react';
import {getCredentials} from "../../actions/accountActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Account from "./Account";
import CreateAccountButton from "./CreateAccountButton"
import {Link} from "react-router-dom";
import SetAlertButton from "../alerts/SetAlertButton";
import Alert from "../alerts/Alert";
import {getAlerts} from "../../actions/alertActions";

class AccountDashboard extends Component {
    componentDidMount() {
        this.props.getCredentials();
        this.props.getAlerts();
    }

    render() {
        const {customAlerts} = this.props.customAlert;
        const {credentials} = this.props.credential;
        return (
            <div id="mainDivAccount" className="register" >
                <br/>
                <br/>
                <div id="accountDiv" className="">
                    <div className="">
                        <div id="mainCredentialsContainer" className="col-md-10">
                            <div className="form-group">
                                <br/>
                                <CreateAccountButton/>
                                <br/>
                                {credentials.map(credential => (
                                    <Link className="nav-link" to={`/dashboard/${credential.id}`}>
                                        <Account
                                            key={credential.id}
                                            credential={credential}
                                        />
                                        <br/>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="alertDiv" className="">
                    <div className="">
                        <div id="mainAlertsContainer" className="col-md-10">
                            <div className="form-group">
                                <br/>
                                <SetAlertButton/>
                                <br/>
                                {customAlerts.map(customAlert => (
                                    <Alert
                                        key={customAlert.id}
                                        customAlert={customAlert}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AccountDashboard.propTypes = {
    credential: PropTypes.object.isRequired,
    getCredentials: PropTypes.func.isRequired,
    customAlert: PropTypes.object.isRequired,
    getAlerts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    credential: state.credential,
    customAlert: state.customAlert
});

export default connect(mapStateToProps, {getCredentials, getAlerts})(AccountDashboard);