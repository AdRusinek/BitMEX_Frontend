import React from "react";
import {Link} from "react-router-dom";

const ShowFilesButton = () => {
    return (
            <div>
                <React.Fragment>
                    <Link to="/tutorialTable">
                        <text>Show Guides</text>
                    </Link>
                </React.Fragment>
            </div>
    );
};

export default ShowFilesButton;
