import React, {Component} from 'react';

class Alert extends Component {
    render() {
        const {customAlert} = this.props;
        return (
            <div className="alert-display">
                Alert price: {customAlert.alertTriggeringPrice}
            </div>
        );
    }
}

export default Alert;
