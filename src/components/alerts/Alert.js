import React, {Component} from 'react';
import {css} from "../credentials/AccountStyles.css";

class Alert extends Component {
    render() {
        const {customAlert} = this.props;
        return (
            <div id="mainAlertDiv">
                <div className="container">
                    <div id="alertElements" className="col-md-12 m-auto">
                        <text>{customAlert.alertMessage}</text>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;