import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {login} from "../../actions/securityActions";
import {css} from "./UserManagement.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            requestFromIp: "",
            username: "",
            password: "",
            code: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/accounts");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.security.validToken) {
            this.props.history.push("/accounts");
        }

        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
            username: this.state.username,
            password: this.state.password,
            code: this.state.code
        };
        this.props.login(LoginRequest);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors} = this.state;

        let disableSubmit = false;
        if (this.state.username.length < 5) {
            disableSubmit = true;
        }
        if (this.state.password.length < 6) {
            disableSubmit = true;
        }
        if (this.state.code.length < 6) {
            disableSubmit = true;
        }

        let message;
        if (this.props.location.state == null) {
            message = "";
        } else {
            message = this.props.location.state.detail;
        }
        const pStyle = {
            fontSize: '11px',
            textAlign: 'center',
            color: 'orange'
        };
        return (
            <div>
                <div className="login-register">
                    <div className="logo">
                        <i className="fa fa-home"/>
                    </div>
                    <h2>Login</h2>
                    <p style={pStyle}>{message === null ? "" : message}</p>
                    <div className="form">
                        <form autocomplete="off" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label title="Username" htmlFor="username">
                                    <i className="fa fa-user"/>
                                </label>
                                <input
                                    autocomplete="false"
                                    type="text"
                                    className={classnames({
                                        "is-invalid": errors.username
                                    })}
                                    placeholder="Email Address"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <div className="clear"/>
                            </div>
                            <div className="form-group">
                                <label title="Password" htmlFor="password">
                                    <i className="fa fa-key"/>
                                </label>
                                <input
                                    autocomplete="false"
                                    type="password"
                                    className={classnames({
                                        "is-invalid": errors.password
                                    })}
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <div className="clear"/>
                            </div>
                            <div className="form-group">
                                <label title="Code" htmlFor="code">
                                    <i className="fa fa-refresh fa-spin fa-1x fa-fw"/>
                                </label>
                                <input
                                    type="number"
                                    className={classnames({
                                        "is-invalid": errors.code
                                    })}
                                    placeholder="Two-Factor Token "
                                    name="code"
                                    value={this.state.code}
                                    onChange={this.onChange}
                                />
                                <div className="clear"/>
                            </div>
                            {errors.code && (
                                <div className="invalid-input">{errors.code}</div>
                            )}
                            {errors.requestFromIp&& (
                                <div className="invalid-input">{errors.requestFromIp}</div>
                            )}
                            <div className="btn-group">
                                <button
                                    type="submit"
                                    className="login-register-btn"
                                    disabled={disableSubmit}
                                >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(mapStateToProps, {login})(Login);
