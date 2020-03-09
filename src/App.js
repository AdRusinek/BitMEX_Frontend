import React, {Component} from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Trailing from "./components/UserActions/Trailing";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserMenagement/Register";
import Login from "./components/UserMenagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import Credentials from "./components/credentials/CredentialsDashboard";
import AddCredentials from "./components/credentials/AddCredentials";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header/>
                        {
                            // Public routs
                        }
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        {
                            // Private routs
                        }
                        <Switch>
                            <SecuredRoute exact path="/credentials" component={Credentials}/>
                            <SecuredRoute exact path="/addCredentials" component={AddCredentials}/>
                            <SecuredRoute exact path="/trailing" component={Trailing}/>
                            <SecuredRoute exact path="/dashboard/:id" component={Dashboard}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
