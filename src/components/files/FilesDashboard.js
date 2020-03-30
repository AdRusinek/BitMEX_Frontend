import React, {Component} from 'react';
import {css} from "./Files.css";
import {Link} from "react-router-dom";

class FilesDashboard extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        <Link  to={`/leverage`} > Leverage co i jak</Link>
                    </li>
                </ol>
                <div >
                    <br/>
                    <div id="box-content">
                        <p>1 Ustawianie wartości dźwigni finansowej oraz ich właściowści</p>
                        <img id="imagesId" src={require('./guidesImages/krokPoKroku1.jpg')}/>
                        <p>W pierwszej kolejności podczas otwierania pozycji należy wybrać dźwginie w zakresie od 1-100
                            Im większa dźwignia tym większe ryzyko utraty wkładu na pozycji.</p>
                        <p>UWAGA dźwignia cross (zawsze x100) jako jedyna pozwala na stracenie więcej niż 100% wkładu na
                            pozycji. Pozycja zostaje zlikwidowana dopiero gdy na pozycji tracisz r&oacute;wnowartość
                            portfela.</p>
                        <ul>
                            <li>Otwieranie pozycji. Czym się r&oacute;żni long od short</li>
                            <img id="imagesId" src={require('./guidesImages/krokPoKroku2.jpg')}/>
                        </ul>
                        <p>Zazwyczaj odradzam korzystania z opcji MARKET BUY/SELL ponieważ nigdy nie trafisz w idealny
                            punkt a ustawienie zleceń może Cie do tego przybliżyć. Dodatkowo opcja market ma niewielką
                            prowizje.</p>
                        <p>Kikając long obstawisz że cena p&oacute;jdzie w g&oacute;re i sprzedaż drożej.</p>
                        <p>Kikając short obstawiasz spadek. Na przykładzie aktualnie masz 100 gruszek kt&oacute;re w
                            sumie kosztują 100 zł. Uznałeś że to już ich max i teraz cena zacznie spadać więc
                            sprzedajesz 100 gruszek za 100 zł, teraz czekasz aż za te 100 zł odkupisz np 120 gruszek.
                            :)</p>
                        <ul>
                            <li>Wskaźnik Leverage</li>
                            <img id="imagesId" src={require('./guidesImages/krokPoKroku3.jpg')}/>
                        </ul>
                        <p>SKŁADANIE ZLECEŃ</p>
                        <img id="imagesId" src={require('./guidesImages/krokPoKroku4.jpg')}/>
                        <p>W QUANTITY wpisujecie ile $ chcecie kupić/sprzedać</p>
                        <p>W LIMIT PRICE wpisujecie cene BTC po jakiej chcecie kupić/sprzedać</p>
                        <p>Jeśli masz 1000$ na pozycji LONG i chcesz sprzedać 300$ to masz do wyboru kilka opcji</p>
                        <p>Limit -&gt; QUANTITY 300 -&gt; LIMIT PRICE (wpisz za ile chcesz sprzedać) -&gt; SELL</p>
                        <p>Market -&gt; QUANTITY 300 -&gt; SELL</p>
                        <p>Trailing stop -&gt; QUANTITY 300 -&gt; TRAILING VALUE (wybrana przez Ciebie wartość)
                            -&gt; SELL TRAILING STOP</p>
                        <img id="imagesId" src={require('./guidesImages/krokPoKroku5.jpg')}/>
                        <p>Zazwyczaj lepsza opcja niż market sell/buy przetestujcie sobie na NIEWIELKICH kwotach</p>
                        <p>ZLECENIA ZREALIZOWANE &lt;FILLS&gt;</p>
                        <img id="imagesId" src={require('./guidesImages/krokPoKroku6.jpg')}/>
                        <p>W tym miejscu możecie sobie sprawdzić za ile, kiedy i jakie zlecenie zostało
                            zrealizowane.</p>
                        <p>ZAMANA XBT NA BARDZIEJ CZYTELNE JEDNOSTKI</p>
                        <img id="imagesId" src={require('./guidesImages/krokPoKroku7.jpg')}/>
                        <p>W przypadku mniejszego kapitału warto zamienić przelicznik XBT na mniejszy czyli XBt,
                            kt&oacute;ry pokazuje wiecej miejsc po przecinku.</p>
                        <p>SŁOWNIK POJĘĆ</p>
                        <p>Pozycja short &ndash; zarabiasz jak cena jest niższa niż entry price</p>
                        <p>Pozycja long &ndash; zarabiasz jak cena jest wyższa niż entry price</p>
                        <p>Size &ndash; Ilość kontrakt&oacute;w/$&nbsp; na pozycji (na zielono gramy na wzrost, czerwony
                            na spadek)</p>
                        <p>Entry price &ndash; oznacza moment od kt&oacute;rego pozycja zarabia lub traci. Na entry
                            price można wpłynąc dorzucając kolejne $ do pozycji. Odradzam stałego pompowania pozycji w
                            celu uśrednienia ceny.</p>
                        <p>Mark price &ndash; aktualna cena rynkowa</p>
                        <p>Liq price &ndash; wartość przy kt&oacute;rej stracicie sw&oacute;j wkład w pozycje w
                            przypadku dźwigni cross całe konto jeśli gracie bez STOP LIMIT/LOSS</p>
                        <p>Stop loss &ndash; wyznaczona granica przy kt&oacute;rej z automatu zrealizujesz strate na
                            pozycji long aby nie stracić więcej</p>
                        <p>Stop market - wyznaczona granica przy kt&oacute;rej z automatu zrealizujesz strate na pozycji
                            short aby nie stracić więcej</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default FilesDashboard;