import React from "react";
import { Link } from "react-router-dom";
import {css} from "./AccountStyles.css";

const CreateAccountButton = () => {
    return (
        <div id="createCredentialsButton">
        <React.Fragment>
            <Link to="/addCredentials" id="credentialsButton" className="btn col-md-12">
                <text id="credentialsSubmitButtonText">Add Credentials</text>
                </Link>
        </React.Fragment>
        </div>
    );
};

export default CreateAccountButton;