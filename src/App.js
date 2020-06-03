import React, {Component} from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Trailing from "./components/TrailingStop/AddTrailingStop";
import Register from "./components/UserMenagement/Register";
import Login from "./components/UserMenagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import AccountDashboard from "./components/Account/AccountDashboard";
import LeverageGuide from "./components/files/LeverageGuide";
import StopMarket from "./components/files/StopMarket";
import TutorialTable from "./components/files/TutorialTable";
import ExchangeStepByStep from "./components/files/ExchangeStepByStep";

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
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        {
                            // Private routs
                        }
                        <Switch>
                            <SecuredRoute exact path="/accounts" component={AccountDashboard}/>
                            <SecuredRoute exact path="/accounts/:id" component={AccountDashboard}/>
                            <SecuredRoute exact path="/tutorialTable" component={TutorialTable}/>
                            <SecuredRoute exact path="/exchangeStepByStep" component={ExchangeStepByStep}/>
                            <SecuredRoute exact path="/leverage" component={LeverageGuide}/>
                            <SecuredRoute exact path="/stopMarket" component={StopMarket}/>
                            <SecuredRoute exact path="/trailing/:id" component={Trailing}/>
                            <SecuredRoute exact path="/dashboard/:id" component={Dashboard}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
