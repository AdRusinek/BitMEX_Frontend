import React from "react";
import {Link} from "react-router-dom";
import {css} from "../credentials/AccountStyles.css"

const ShowFilesButton = () => {
    return (
        <div>
            <React.Fragment>
                <Link to="/tutorialTable" id="filesButton" className="btn col-md-5 ">
                    <text id="showFilesButtonText">Show Guides</text>
                </Link>
            </React.Fragment>
        </div>
    );
};

export default ShowFilesButton;