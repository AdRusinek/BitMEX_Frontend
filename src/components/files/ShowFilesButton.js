import React from "react";
import {Link} from "react-router-dom";
import {css} from "../credentials/AccountStyles.css"

const ShowFilesButton = () => {
    return (
        <div id="filesButton">
            <React.Fragment>
                <Link to="/tutorialTable"  className="btn col-md-12 ">
                    <text id="showFilesButtonText">Show Guides</text>
                </Link>
            </React.Fragment>
        </div>
    );
};

export default ShowFilesButton;