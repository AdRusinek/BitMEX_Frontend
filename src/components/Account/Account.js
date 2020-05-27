import React, {Component} from 'react';

class Account extends Component {
    render() {
        const {account} = this.props;
        return (
            <div>
                <text style={{color: "white"}}>{account.accountName}</text>
            </div>
        );
    }
}

export default Account;
