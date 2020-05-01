import React, {Component} from 'react';
import {css} from "./Files.css";
import {Link} from "react-router-dom";

class TutorialTable extends Component {

    render() {
        return (
            <div className="container tutorial-table">

                <Link to={`/exchangeStepByStep`} style={{textDecoration: 'none'}}>
                    <button>
                        <text>Bitmex krok po kroku</text>
                    </button>
                </Link>
                <Link to={`/leverage`} style={{textDecoration: 'none'}}>
                    <button>
                        <text>Leverage co i jak</text>
                    </button>
                </Link>
                <Link to={`/stopMarket`} style={{textDecoration: 'none'}}>
                    <button>
                        <text>Stop Market</text>
                    </button>
                </Link>
            </div>
        )
    }

}


export default TutorialTable
