import React, {Component} from "react";
import Order from "./Order/Order";
import Position from "./Position/Position";
import {connect} from "react-redux";
import {getLimitOrders} from "../actions/orderActions";
import {getPositions} from "../actions/positionActions";
import {getStopOrders} from "../actions/stopActions";
import {getWaitingTrailingStops} from "../actions/trailingActions";
import {getWaitingStopMarkets} from "../actions/stopMarketActions";
import PropTypes from "prop-types";
import OrderHeadTable from "./Order/OrderHeadTable";
import PositionHeadTable from "./Position/PositionHeadTable";
import StopHeadTable from "./Stop/StopHeadTable";
import Stop from "./Stop/Stop";
import TrailingStopHeadTable from "./TrailingStop/TrailingStopHeadTable";
import WaitingTrailingStop from "./TrailingStop/TrailingStop";
import WaitingStopMarket from "./StopMarket/StopMarket";
import AddWaitingTrailingStopButton from "./TrailingStop/AddTrailingStopButton";
import AddWaitingStopMarketButton from "./StopMarket/AddStopMarketButton";
import {css} from "./UserDashboard.css";
import StopMarketHeadTable from "./StopMarket/StopMarketHeadTable";

class Dashboard extends Component {
    state = {
        limitsExceeded: "",
        errors: {}
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return {errors: nextProps.errors};
        }
        return null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPositions(id);
        this.props.getOrdersLimit(id);
        this.props.getStops(id);
        this.props.getWaitingTrailingStops(id);
        this.props.getWaitingStopMarkets(id);
    }

    render() {
        const {id} = this.props.match.params;
        const {positions} = this.props.position;
        const {orders} = this.props.order;
        const {stops} = this.props.stop;
        const {waitingTrailingStops} = this.props.waitingTrailingStop;
        const {waitingStopMarkets} = this.props.waitingStopMarket;

        function manageAddTrailingStopButton() {
            if (waitingTrailingStops.length < 6) {
                return <AddWaitingTrailingStopButton accountId={id}/>
            } else {
                return (
                    <div className="exceeded-amount-trailing-stops">
                        <text>Maksymalna ilość Trailingów.</text>
                    </div>
                );
            }
        }

        function manageAddStopMarketButton() {
            if (waitingStopMarkets.length < 4) {
                return <AddWaitingStopMarketButton accountId={id}/>
            } else {
                return (
                    <div className="exceeded-amount-trailing-stops">
                        <text>Maksymalna ilość zleceń Stop Market.</text>
                    </div>
                );
            }
        }

        const {errors} = this.state;
        return (
            <div className="user-dashboard container">
                <div className="col-sm-12">
                    {errors.limitsExceeded && (
                        <div className="limits-exceeded">{errors.limitsExceeded}</div>
                    )}
                    <ul className="stop-buttons">
                        <li>
                            {manageAddTrailingStopButton()}
                        </li>
                        <li>
                            {manageAddStopMarketButton()}
                        </li>
                    </ul>
                    <div className="user-dashboard-element">
                        <TrailingStopHeadTable/>
                        {waitingTrailingStops.map(waitingTrailingStop => (
                            <WaitingTrailingStop
                                key={waitingTrailingStop.id}
                                waitingTrailingStop={waitingTrailingStop}
                            />
                        ))}
                    </div>
                    <div className="user-dashboard-element">
                        <StopMarketHeadTable/>
                        {waitingStopMarkets.map(waitingStopMarket => (
                            <WaitingStopMarket
                                key={waitingStopMarket.id}
                                waitingStopMarket={waitingStopMarket}
                            />
                        ))}
                    </div>
                    <div className="user-dashboard-element">
                        <PositionHeadTable/>
                        {positions.map(position => (
                            <Position
                                key={position.openingTimestamp}
                                position={position}
                            />
                        ))}
                    </div>
                    <div className="user-dashboard-element">
                        <StopHeadTable/>
                        {stops.map(stop => (
                            <Stop key={stop.timestamp} stop={stop}/>
                        ))}
                    </div>
                    <div className="user-dashboard-element">
                        <OrderHeadTable/>
                        {orders.map(order => (
                            <Order key={order.timestamp} order={order}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    order: PropTypes.object.isRequired,
    getOrdersLimit: PropTypes.func.isRequired,
    stop: PropTypes.object.isRequired,
    getStops: PropTypes.func.isRequired,
    waitingTrailingStop: PropTypes.object.isRequired,
    getWaitingTrailingStops: PropTypes.func.isRequired,
    waitingStopMarket: PropTypes.object.isRequired,
    getWaitingStopMarkets: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
    getPositions: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    order: state.order,
    stop: state.stop,
    position: state.position,
    waitingTrailingStop: state.waitingTrailingStop,
    waitingStopMarket: state.waitingStopMarket,
    errors: state.errors
});

export default connect(mapStateToProps, {
    getOrdersLimit: getLimitOrders,
    getStops: getStopOrders,
    getPositions,
    getWaitingTrailingStops,
    getWaitingStopMarkets
})(Dashboard);
