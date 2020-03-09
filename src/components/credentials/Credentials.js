import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Credentials extends Component {
    render() {
        const {credential} = this.props;
        return (
            <div>
                <div className="credentials">
                    <div className="container">
                        <div id="credentialsElements" className="col-md-12 m-auto">
                            <br/>

                                <td>{credential.credentialsName}</td>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Credentials;