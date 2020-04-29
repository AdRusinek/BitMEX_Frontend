import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";
import {css} from "./Layout.css";


class Header extends Component {

    logout() {
        this.props.logout();
        window.location.href = "/";
    }

    render() {
        const {validToken, user} = this.props.security;

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link id="headerText"  className="nav-link" to="/accounts">
                            <i className="fas fa-user-circle mr-1"/> {user.fullName}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link id="headerText"  className="nav-link" to="/logout" onClick={this.logout.bind(this)}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link id="landingActions" className="nav-link" to="/register">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link id="landingActions" className="nav-link" to="/">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        );

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }

        return (
            <div>
                <nav id="mainNavbar" className="navbar navbar-expand-sm">
                    <div className="container">
                        <h3 id="managementTool" className="navbar-brand" >
                            BitMEX Management Tool
                        </h3>
                        {headerLinks}
                    </div>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    {logout}
)(Header);
