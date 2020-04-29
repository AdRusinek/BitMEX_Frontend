import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postTrailingStop} from "../../actions/trailingActions";
import classnames from "classnames";

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
            <div>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div id="trailingStopDivs" className="col-md-8 m-auto">
                            <p id="trailingStopTextSet" className="lead text-center">
                                Set Trailing Stop
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        id="trailingStopSet"
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
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
                                <div className="form-group">
                                    <input
                                        id="trailingStopSet"
                                        type="number"
                                        className={classnames("form-control form-control-lg", {
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
                                <div className="form-group">
                                    <input
                                        id="trailingStopSet"
                                        type="number"
                                        className={classnames("form-control form-control-lg", {
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
                                <input
                                    id="trailingStopSetSubmit"
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

AddWaitingTrailingStop.propTypes = {
    createTrailing: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {postTrailingStop})(AddWaitingTrailingStop);
