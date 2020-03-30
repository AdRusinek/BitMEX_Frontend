import React, {Component} from 'react';
import {css} from "./Files.css";
import {Link} from "react-router-dom";
import BitmexStepByStep from "./BitmexStepByStep";


class TutorialTable extends Component {

    render() {
        return (
            <div className="container">
                <table id="tutorialTable">
                    <thead>
                    <tr>
                        <td>
                            <Link to={`/bitmexStepByStep`} style={{ textDecoration: 'none' }}><p>Bitmex krok po kroku</p></Link>
                        </td>
                        <td>
                            <Link to={`/leverage`} style={{ textDecoration: 'none' }}><p>Leverage co i jak</p></Link>
                        </td>
                        <td>
                            <Link to={`/stopMarket`} style={{ textDecoration: 'none' }}><p>Stop Market</p></Link>
                        </td>
                    </tr>
                    </thead>
                </table>
            </div>
        )
    }

}


export default TutorialTable