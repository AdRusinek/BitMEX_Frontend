import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div id="landing" className="col-md-12 text-center">
                <h1 className="display-4 mb-4">BitMEX Menagement Tool</h1>
                <p className="lead">
                  Create your account to join BitMEX Menagement Tool
                </p>
                <hr />
                <Link
                  id="landingButton"
                  className="btn btn-lg btn-primary mr-2"
                  to="/register"
                >
                  Sign Up
                </Link>
                <Link
                  id="landingButton"
                  className="btn btn-lg btn-secondary mr-2"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
