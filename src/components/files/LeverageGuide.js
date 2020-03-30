import React, {Component} from 'react';
import {css} from "./Files.css";
import TutorialTable from "./TutorialTable";


class LeverageGuide extends Component {
    render() {
        return (
            <div>
                <TutorialTable/>
                <div>
                    <br/>
                    <div id="box-content">
                        <br/>
                        <img id="leverageAndSMImagesId" src={require('./guidesImages/leverage1.jpg')}/>
                        <p>Wskaźnik LEVERAGE przy dźwigni cross jako wyznacznik wielkości zleceń</p>
                        <p>CO WARTO WIEDZIEĆ</p>
                        <ol>
                            <br/>
                            <p>W przypadku braku pozycji wskaźnik</p>
                        </ol>
                        <p>LEVERAGE zawsze pokazuje 0.00x 2. Zmiany na wskaźniku można zaobserwować dopiero po otwarciu
                            pozycji
                            lub w przypadku zrealizowania zlecenia.</p>
                        <p>3 Wskaźnik zmienia swoją wartość wraz z kursem BTC</p>
                        <ol start="4">
                            <br/>
                            <p>Na początku warto ustawiać niewielkie zlecenia, z czasem jak ogarniecie mechanizm
                                możecie dawać
                                większe zlecenia tylko musicie pamiętać że wtedy łatwiej WYZEROWAĆ konto
                            </p>
                        </ol>
                        <p>JAK WYZNACZYĆ LEVERAGE</p>
                        <p>krok 1: Otwieramy NIEWIELKĄ pozycje po aktualnej cenie</p>
                        <p>krok 2: Celem jest ustawić taką pozycje aby LEVERAGE pokazywał 1.00x</p>
                        <p>&lt;WARTOŚCI SĄ PRZYPADKOWE&gt;</p>
                        <ol>
                            <br/>
                            <p>otworzyliśmy niewielką pozycje za 10$,po otworzeniu pozycji za 10$ wskaźnik leverage
                                pokazuje
                                0.10x.
                            </p>
                            <br/>
                            <p>Wynika z tego ze aktualnie mamy 1/10 wymaganej pozycji więc dokładamy dodatkowo 90$ co w
                                sumie
                                da nam 100$ na pozycji
                            </p>
                        </ol>
                        <p>JAK WYZNACZYĆ ILOŚĆ KONTRAKT&Oacute;W NA ZLECENIE</p>
                        <p>Przykładowo jedno zlecenie według wskaźnika leverage to 0.15x, otworzyliśmy pozycje za 10$ i
                            leverage
                            pokazuje 0.10x czyli 10$=0.10x to oznacza że na zlecenie musimy dać 15$</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeverageGuide