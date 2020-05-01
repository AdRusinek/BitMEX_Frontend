import React from "react";
import {Link} from "react-router-dom";

const ShowFilesButton = () => {
    return (
        <div className="guide-display">

            <React.Fragment>
                <Link id="guide-link" to="/exchangeStepByStep">
                    <button>
                        <i className="fa fa-book"/>
                        <text> Show Guides</text>
                    </button>
                </Link>
            </React.Fragment>
        </div>
    );
};

export default ShowFilesButton;
