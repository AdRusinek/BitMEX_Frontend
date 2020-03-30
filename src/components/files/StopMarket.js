import React, {Component} from 'react';
import {css} from "./Files.css";
import TutorialTable from "./TutorialTable";

class StopMarket extends Component {
    render() {
        return (
            <div>
                <TutorialTable/>
                <div>
                    <br/>
                    <div id="box-content">
                        <br/>
                        <p>Zabezpieczanie pozycji przy pomocy STOP MARKET</p>
                        <p>Dzięki opcji stop market możemy ustawić moment w kt&oacute;rym nie chcemy ryzykować większą
                            stratą.
                            Po osiągnięciu danej ceny pozycja automatycznie zostanie zamknięta. W przypadku wpisania
                            mniejszej
                            ilości kontrakt&oacute;w na pozycji po wbiciu STOP MARKET dana ilość kontrakt&oacute;w
                            zostanie
                            odjęta z naszej pozycji</p>
                        <p>W quantty wpisujemy ilość kontrakt&oacute;w jakiej chcemy się pozbyć</p>
                        <p>Stop price w przypadku pozycji LONG ustawiamy niżej od aktualnej i dajemy SET SELL STOP</p>
                        <img id="leverageAndSMImagesId" src={require('./guidesImages/stopMarket1.jpg')}/>
                        <p>Stop price w przypadku pozycji SHORT ustawiami wyżej od aktualnej i dajemy SET BUY STOP</p>
                        <img id="leverageAndSMImagesId" src={require('./guidesImages/stopMarket2.jpg')}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default StopMarket