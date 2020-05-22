import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postTrailingStop} from "../../actions/trailingActions";
import classnames from "classnames";
import {css} from "../Account/AccountStyles.css";


export class AddWaitingTrailingStop extends Component {

    state = {
        startingPrice: "",
        quantity: "",
        trialValue: "",
        execInst: "MarkPrice",
        closeOnTrigger: 0,
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
        const {startingPrice, quantity, trialValue, execInst, closeOnTrigger} = this.state;
        const currentAccountId = this.props.paramsAccountId;
        const newTrailing = {
            startingPrice,
            quantity,
            trialValue,
            execInst,
            closeOnTrigger
        };
        this.props.postTrailingStop(newTrailing, this.props.closeModal, currentAccountId);
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return {errors: nextProps.errors};
        }
        return null;
    }

    render() {
        const {errors} = this.state;
        let disableSubmit = false;

        if (this.state.startingPrice === '') {
            disableSubmit = true;
        }
        if (this.state.quantity === '') {
            disableSubmit = true;
        }
        if (this.state.trialValue === '') {
            disableSubmit = true;
        }

        return (
            <div className="container">
                <div className="col-md-8 m-auto">
                    <p className="trailing-text">
                        Set Trailing Stop
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <div className="execInst-options">
                                <select
                                    className="exec-inst"
                                    value={this.state.execInst}
                                    onChange={this.onChange}
                                    name="execInst"
                                >
                                    <option value="MarkPrice">Mark</option>
                                    <option value="LastPrice">Last</option>
                                    <option value="IndexPrice">Index</option>
                                </select>
                            <text>Close on Trigger</text>
                                <input
                                    className="close-on-trigger"
                                    type="checkbox"
                                    value={this.state.closeOnTrigger}
                                    onChange={this.onChange}
                                    name="closeOnTrigger"
                                />
                        </div>
                        <div className="form-group-modal">
                            <input
                                type="number"
                                className={classnames("", {
                                    "is-invalid": errors.startingPrice
                                })}
                                placeholder="Starting Price"
                                name="startingPrice"
                                value={this.state.startingPrice}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.startingPrice && (
                            <div className="invalid-input">
                                {errors.startingPrice}
                            </div>
                        )}
                        <div className="form-group-modal">
                            <input
                                type="number"
                                className={classnames("", {
                                    "is-invalid": errors.quantity
                                })}
                                placeholder="Quantity"
                                name="quantity"
                                value={this.state.quantity}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.quantity && (
                            <div className="invalid-input">{errors.quantity}</div>
                        )}
                        <div className="form-group-modal">
                            <input
                                type="number"
                                className={classnames("", {
                                    "is-invalid": errors.trialValue
                                })}
                                placeholder="Trial Value"
                                name="trialValue"
                                value={this.state.trialValue}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.trialValue && (
                            <div className="invalid-input">{errors.trialValue}</div>
                        )}
                        <div className="btn-group-modal">
                            <button
                                type="submit"
                                className="register-btn-modal"
                                disabled={disableSubmit}
                            >Add Trailing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

AddWaitingTrailingStop.propTypes = {
    createTrailing: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {postTrailingStop})(AddWaitingTrailingStop);
