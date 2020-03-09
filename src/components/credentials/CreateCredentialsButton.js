import React from "react";
import { Link } from "react-router-dom";

const CreateCredentialsButton = () => {
    return (
        <React.Fragment>
            <Link to="/addCredentials" className="btn btn-lg btn-info">
                Add Credentials
            </Link>
        </React.Fragment>
    );
};

export default CreateCredentialsButton;