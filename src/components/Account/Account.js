import React, {Component} from 'react';

class Account extends Component {
    render() {
        const {account} = this.props;
        return (
            <div>
                <div className="container">
                    <div id="" className="col-md-12 m-auto">
                        <td>{account.accountName}</td>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
