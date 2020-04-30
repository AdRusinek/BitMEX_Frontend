import React from "react";
import {Link} from "react-router-dom";

const ShowFilesButton = () => {
    return (
        <div className="guide-display">
            <React.Fragment>
                    <Link id="guide-link" to="/tutorialTable">
                        <i className="fa fa-book"/>
                        <text>Show Guides</text>
                    </Link>
            </React.Fragment>
        </div>
    );
};

export default ShowFilesButton;
