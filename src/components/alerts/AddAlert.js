import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setAlert} from "../../actions/alertActions";
import {css} from "../credentials/AccountStyles.css";

class AddAlert extends Component {
    constructor() {
        super();

        this.state = {
            alertMessage: "",
            alertTriggeringPrice: "",
            direction: "above",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) {
        const {name, value, type, checked} = e.target;
        type === "checkbox" ? this.setState({[name]: checked}) :
            this.setState({
                [name]: value
            })
    }

    onSubmit(e) {
        e.preventDefault();

        const newAlert = {
            alertMessage: this.state.alertMessage,
            alertTriggeringPrice: this.state.alertTriggeringPrice,
            direction: this.state.direction
        };
        console.log(newAlert);
        this.props.setAlert(newAlert, this.props.history);
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
                                <div>
                                    <label id="directionLabelText">Price goes: </label>
                                    <select
                                        id="selectDirection"
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
                                        className={classnames("form-control form-control-lg", {
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
                                        className={classnames("form-control form-control-lg", {
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
                                <input
                                    id="alertSubmit"
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

AddAlert.propTypes = {
    setAlert: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {setAlert})(AddAlert);