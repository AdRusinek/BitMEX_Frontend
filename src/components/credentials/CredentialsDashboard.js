import React, {Component} from 'react';
import {getCredentials} from "../../actions/credentialActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Credentials from "./Credentials";
import CreateCredentialsButton from "./CreateCredentialsButton"
import {Link} from "react-router-dom";

class CredentialsDashboard extends Component {
    componentDidMount() {
        this.props.getCredentials();
    }

    render() {
        const {credentials} = this.props.credential;
        return (
            <div>
                <div className="container">
                    <table id="" className="table-sm">
                        <thead>
                        <br/>
                        {credentials.map(credential => (
                            <Link to={`/dashboard/${credential.id}`} className="btn btn-md btn-secondary">
                            <Credentials
                                key={credential.id}
                                credential={credential}
                            />
                            </Link>
                        ))}
                        <br/>
                        <br/>
                        <CreateCredentialsButton/>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }
}

CredentialsDashboard.propTypes = {
    credential: PropTypes.object.isRequired,
    getCredentials: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    credential: state.credential
});

export default connect(mapStateToProps, {getCredentials})(CredentialsDashboard);