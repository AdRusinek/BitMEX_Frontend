import React, {Component} from 'react';

class Alert extends Component {
    render() {
        const {customAlert} = this.props;
        return (
            <div className="alert-display">
                <text>{customAlert.alertMessage}</text>
            </div>
        );
    }
}

export default Alert;
