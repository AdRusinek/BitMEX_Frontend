import React, {Component} from 'react';

class Account extends Component {
    render() {
        const {account} = this.props;
        return (
            <div className="account-display">
                <text>{account.accountName}</text>
            </div>
        );
    }
}

export default Account;
