import React, {Component} from 'react';

class Account extends Component {
    render() {
        const {account} = this.props;
        return (
            <div className="account">
                {account.accountName}
            </div>
        );
    }
}

export default Account;
