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
import ShowFilesButton from "../files/ShowFilesButton";

class AccountDashboard extends Component {
    componentDidMount() {
        this.props.getCredentials();
        this.props.getAlerts();
    }

    render() {
        const {customAlerts} = this.props.customAlert;
        const {credentials} = this.props.credential;
        return (
            <div>
            <div className="container mainAccountDashboard">
                <div className="row">
                    <div id="accounts" className="col-sm-6 col-md-5 offset-md-1">
                        <CreateAccountButton/>
                        {credentials.map(credential => (
                            <Link className="nav-link" to={`/dashboard/${credential.id}`}>
                                <Account
                                    key={credential.id}
                                    credential={credential}
                                />
                            </Link>
                        ))}
                    </div>
                    <div id="alerts" className="col-sm-6 col-md-5">
                        <SetAlertButton/>
                        {customAlerts.map(customAlert => (
                            <Alert
                                key={customAlert.id}
                                customAlert={customAlert}
                            />
                        ))}
                    </div>
                </div>
            </div>
                <ShowFilesButton/>
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