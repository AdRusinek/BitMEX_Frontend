import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTrailing } from "../../actions/trailingActions";
import classnames from "classnames";

class Trailing extends Component {
  constructor() {
    super();

    this.state = {
      startingPrice: "",
      quantity: "",
      trialValue: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newTrailing = {
      startingPrice: this.state.startingPrice,
      quantity: this.state.quantity,
      trialValue: this.state.trialValue
    };
    const {id} = this.props.match.params;
    this.props.createTrailing(newTrailing, this.props.history, id);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <br />
        <br />
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

Trailing.propTypes = {
  createTrailing: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createTrailing })(Trailing);
