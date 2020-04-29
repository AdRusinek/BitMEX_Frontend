import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postAccount} from "../../actions/accountActions";
import {css} from "./AccountStyles.css";

class AddAccount extends Component {
    state = {
        accountName: "",
        apiKey: "",
        apiKeySecret: "",
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const {accountName, apiKey, apiKeySecret} = this.state;
        const newAccount = {
            accountName,
            apiKey,
            apiKeySecret
        };
        this.props.postAccount(
            newAccount,
            this.props.closeModal
        );
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return {errors: nextProps.errors};
        }
        return null;
    }

    render() {
        const {errors} = this.state;
        return (
            <div id="mainAccountDiv">
                <div className="container">
                    <div className="row">
                        <div id="credentialDivs" className="col-md-8 m-auto">
                            <p id="credentialsTextSet" className="lead text-center">
                                BitMEX Credentials
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        id="credentialsSet"
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.accountName
                                        })}
                                        placeholder="Name of your credentials"
                                        name="accountName"
                                        value={this.state.accountName}
                                        onChange={this.onChange}
                                    />
                                    {errors.accountName && (
                                        <div className="invalid-feedback">
                                            {errors.accountName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        id="credentialsSet"
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.apiKey
                                        })}
                                        placeholder="Api Key"
                                        name="apiKey"
                                        value={this.state.apiKey}
                                        onChange={this.onChange}
                                    />
                                    {errors.apiKey && (
                                        <div className="invalid-feedback">{errors.apiKey}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        id="credentialsSet"
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.apiKeySecret
                                        })}
                                        placeholder="Secret api key"
                                        name="apiKeySecret"
                                        value={this.state.apiKeySecret}
                                        onChange={this.onChange}
                                    />
                                    {errors.apiKeySecret && (
                                        <div className="invalid-feedback">{errors.apiKeySecret}</div>
                                    )}
                                </div>
                                <input
                                    id="credentialsSetSubmit"
                                    type="submit"
                                    className="btn btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddAccount.propTypes = {
    postAccount: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {postAccount})(AddAccount);
