import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postAlert} from "../../actions/alertActions";
import {css} from "../Account/AccountStyles.css";

class AddAlert extends Component {
    state = {
        alertMessage: "",
        alertTriggeringPrice: "",
        direction: "above",
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange = e => {
        const {name, value, type, checked} = e.target;
        type === "checkbox" ? this.setState({[name]: checked}) :
            this.setState({
                [name]: value
            })
    };

    onSubmit = e => {
        e.preventDefault();
        const {alertMessage, alertTriggeringPrice, direction} = this.state;
        const newAlert = {
            alertMessage,
            alertTriggeringPrice,
            direction
        };
        this.props.postAlert(
            newAlert,
            this.props.closeModal);
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
            <div id="addAlertMainDiv">
                <div className="container">
                    <div className="row">
                        <div id="alertDivs" className="col-md-8 m-auto">
                            <p id="alertTextSet" className="lead text-center">
                                BitMEX Alerts
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="alert-options">
                                    <text>Price goes:  </text>
                                    <select
                                        className="alert-select"
                                        value={this.state.direction}
                                        onChange={this.onChange}
                                        name="direction"
                                    >
                                        <option value="above">Above</option>
                                        <option value="below">Below</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        id="alertSet"
                                        type="text"
                                        className={classnames("", {
                                            "is-invalid": errors.alertTriggeringPrice
                                        })}
                                        placeholder="Starting Price"
                                        name="alertTriggeringPrice"
                                        value={this.state.alertTriggeringPrice}
                                        onChange={this.onChange}
                                    />
                                    {errors.alertTriggeringPrice && (
                                        <div className="invalid-feedback">
                                            {errors.alertTriggeringPrice}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        id="alertSet"
                                        type="text"
                                        className={classnames("", {
                                            "is-invalid": errors.alertMessage
                                        })}
                                        placeholder="Your alert message"
                                        name="alertMessage"
                                        value={this.state.alertMessage}
                                        onChange={this.onChange}
                                    />
                                    {errors.alertMessage && (
                                        <div className="invalid-feedback">
                                            {errors.alertMessage}
                                        </div>
                                    )}
                                </div>
                                <div className="btn-group-modal">
                                    <button
                                        type="submit"
                                        className="register-btn-modal"
                                    >Add Alert</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddAlert.propTypes = {
    postAlert: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {postAlert})(AddAlert);
