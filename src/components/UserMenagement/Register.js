import React, {Component} from "react";
import {createNewUser} from "../../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {css} from "./UserManagement.css";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            value: false,
            username: "",
            fullName: "",
            password: "",
            confirmPassword: "",
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
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };

        this.props.createNewUser(newUser, this.props.history);
        this.setState({value: true});
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="login-register">
                <div className="logo">
                    <i className="fa fa-user-circle-o"/>
                </div>
                <h2>Create Account</h2>
                <div className="form">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label title="Full name" htmlFor="fullName">
                                <i className="fa fa-user-o"/>
                            </label>
                            <input
                                type="text"
                                className={classnames("", {
                                    "is-invalid": errors.fullName
                                })}
                                placeholder="Full Name"
                                name="fullName"
                                value={this.state.fullName}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.fullName && (
                            <div className="invalid-input">{errors.fullName}</div>
                        )}
                        <div className="form-group">
                            <label title="Username" htmlFor="username">
                                <i className="fa fa-user"/>
                            </label>
                            <input
                                type="text"
                                className={classnames("", {
                                    "is-invalid": errors.username
                                })}
                                placeholder="Email Address (Username)"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.username && (
                            <div className="invalid-input">{errors.username}</div>
                        )}
                        <div className="form-group">
                            <label title="Password" htmlFor="password">
                                <i className="fa fa-key"/>
                            </label>
                            <input
                                type="password"
                                className={classnames("", {
                                    "is-invalid": errors.password
                                })}
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.password && (
                            <div className="invalid-input">{errors.password}</div>
                        )}
                        <div className="form-group">
                            <label title="Password" htmlFor="password">
                                <i className="fa fa-key"/>
                            </label>
                            <input
                                type="password"
                                className={classnames("", {
                                    "is-invalid": errors.confirmPassword
                                })}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.confirmPassword && (
                            <div className="invalid-input">
                                {errors.confirmPassword}
                            </div>
                        )}
                        <div className="btn-group">
                            <button
                                disabled={this.state.value}
                                type="submit"
                                className="login-register-btn"
                            >
                                <span>Register</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});
export default connect(mapStateToProps, {createNewUser})(Register);
