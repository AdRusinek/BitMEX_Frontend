import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postStopMarket} from "../../actions/stopMarketActions";
import classnames from "classnames";
import {css} from "../Account/AccountStyles.css";


export class AddStopMarket extends Component {

    state = {
        stopMarketAmount: "",
        startingPrice: "",
        quantity: "",
        stopPrice: "",
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
        const {startingPrice, quantity, stopPrice, execInst, closeOnTrigger} = this.state;
        const currentAccountId = this.props.paramsAccountId;
        const newStopMarket = {
            startingPrice,
            quantity,
            stopPrice,
            execInst,
            closeOnTrigger
        };
        this.props.postStopMarket(newStopMarket, this.props.closeModal, currentAccountId);
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
        if (this.state.stopPrice === '') {
            disableSubmit = true;
        }

        return (
            <div className="container">
                <div className="col-md-8 m-auto">
                    <p className="trailing-text">
                        Set Stop Market
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
                                    "is-invalid": errors.stopPrice
                                })}
                                placeholder="Stop Price"
                                name="stopPrice"
                                value={this.state.stopPrice}
                                onChange={this.onChange}
                            />
                        </div>
                        {errors.stopPrice && (
                            <div className="invalid-input">{errors.stopPrice}</div>
                        )}
                        {errors.stopMarketAmount && (
                            <div className="invalid-input">{errors.stopMarketAmount}</div>
                        )}
                        <div className="btn-group-modal">
                            <button
                                type="submit"
                                className="register-btn-modal"
                                disabled={disableSubmit}
                            >Add Stop Market
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
AddStopMarket.propTypes = {
    postStopMarket: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {postStopMarket})(AddStopMarket);
