import React, {Component} from 'react';

class Alert extends Component {
    render() {
        const {customAlert} = this.props;
        return (
            <div>
                <div className="container">
                    <div id="alertElements" className="col-md-12 m-auto">
                        <td>{customAlert.alertTriggeringPrice + " Message->"}</td>
                        <td>{" " + customAlert.alertMessage}</td>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;