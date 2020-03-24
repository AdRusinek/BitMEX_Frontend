import React, {Component} from 'react';

class Account extends Component {
    render() {
        const {credential} = this.props;
        return (
            <div>
                <div className="container">
                    <div id="credentialsElements" className="col-md-12 m-auto">
                        <td>{credential.credentialsName}</td>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;