import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {css} from "../trailingStop/TrailingStylees.css";

class ButtonTrailingStop extends Component {
    render() {
        return (
            <div>
                <div id="ButtonTrailingStop" className="container">
                        <Link to={`/trailing/${this.props.id}`} className="btn col-md-12">
                            <text id="ButtonTrailingStopText"> Set Trailing stop </text>
                        </Link>
                </div>
            </div>
        );
    }
}

export default ButtonTrailingStop;