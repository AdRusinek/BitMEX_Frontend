import React from "react";
import { Link } from "react-router-dom";
import {css} from "../credentials/AccountStyles.css";

const SetAlertButton = () => {
    return (
        <div id="createAlertButton">
            <React.Fragment>
                <Link to="/addAlert" id="alertButton" className="btn col-md-12">
                    <text id="alertSubmitButtonText">Add Alert</text>
                </Link>
            </React.Fragment>
        </div>
    );
};

export default SetAlertButton;