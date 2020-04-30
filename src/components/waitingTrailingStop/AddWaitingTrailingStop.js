import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postTrailingStop} from "../../actions/trailingActions";
import classnames from "classnames";
import {css} from "../Account/AccountStyles.css";


class AddWaitingTrailingStop extends Component {

    state = {
        startingPrice: "",
        quantity: "",
        trialValue: "",
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
        // const {id} = this.props.match.params;
    };

    onSubmit = e => {
        e.preventDefault();
        const {startingPrice, quantity, trialValue} = this.state;
        const currentAccountId = this.props.paramsAccountId;
        const newTrailing = {
            startingPrice,
            quantity,
            trialValue
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

        return (
            <div className="container">
                <div className="col-md-8 m-auto">
                    <p className="trailing-text">
                        Set Trailing Stop
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group-modal">
                            <input
                                type="text"
                                className={classnames("", {
                                    "is-invalid": errors.startingPrice
                                })}
                                placeholder="Starting Price"
                                name="startingPrice"
                                value={this.state.startingPrice}
                                onChange={this.onChange}
                            />
                            {errors.startingPrice && (
                                <div className="invalid-feedback">
                                    {errors.startingPrice}
                                </div>
                            )}
                        </div>
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
                            {errors.quantity && (
                                <div className="invalid-feedback">{errors.quantity}</div>
                            )}
                        </div>
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
                            {errors.trialValue && (
                                <div className="invalid-feedback">{errors.trialValue}</div>
                            )}
                        </div>
                        <div className="btn-group-modal">
                            <button
                                type="submit"
                                className="register-btn-modal"
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
