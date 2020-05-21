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
            <div className="custom-navbar">
                <ul>
                    <li>
                        <Link to="/accounts" style={{textDecoration: 'none'}}>
                            <text id="headText"> Główny panel</text>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" style={{textDecoration: 'none'}} onClick={this.logout.bind(this)}>
                            <text id="headText">Wyloguj</text>
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="custom-navbar">
                <ul>
                    <li>
                        <Link id="headText" to="/register" style={{textDecoration: 'none'}}>
                            Zarejestruj
                        </Link>
                    </li>
                    <li>
                        <Link id="headText" to="/" style={{textDecoration: 'none'}}>
                            Zaloguj
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
                <nav className="">
                    <div className="container">
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
