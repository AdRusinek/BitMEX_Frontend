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
        accountAmount: "",
        credentialsRepeated: "",
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
        let disableSubmit = false;
        if (this.state.accountName === '') {
            disableSubmit = true;
        }
        if (this.state.apiKey.length < 20) {
            disableSubmit = true;
        }
        if (this.state.apiKeySecret.length < 30) {
            disableSubmit = true;
        }

        const {errors} = this.state;
        return (
            <div className="container">
                <div className="col-md-8 m-auto">
                    <p className="lead text-center">
                        BitMEX Credentials
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group-modal">
                            <input
                                type="text"
                                className={classnames("", {
                                    "is-invalid": errors.accountName
                                })}
                                placeholder="Name of your credentials"
                                name="accountName"
                                value={this.state.accountName}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.accountName && (
                            <div className="invalid-input-add-account">
                                {errors.accountName}
                            </div>
                        )}
                        <div className="form-group-modal">
                            <input
                                type="text"
                                className={classnames("", {
                                    "is-invalid": errors.apiKey
                                })}
                                placeholder="Api Key"
                                name="apiKey"
                                value={this.state.apiKey}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.apiKey && (
                            <div className="invalid-input-add-account">{errors.apiKey}</div>
                        )}
                        <div className="form-group-modal">
                            <input
                                type="text"
                                className={classnames("", {
                                    "is-invalid": errors.apiKeySecret
                                })}
                                placeholder="Secret api key"
                                name="apiKeySecret"
                                value={this.state.apiKeySecret}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.apiKeySecret && (
                            <div className="invalid-input-add-account">{errors.apiKeySecret}</div>
                        )}
                        {errors.accountAmount && (
                            <div className="invalid-input-add-account">{errors.accountAmount}</div>
                        )}
                        {errors.credentialsRepeated && (
                            <div className="invalid-input-add-account">{errors.credentialsRepeated}</div>
                        )}
                        <div className="btn-group-modal">
                        <button
                            type="submit"
                            className="register-btn-modal"
                            disabled={disableSubmit}
                        >Add Account</button>
                        </div>
                    </form>
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
