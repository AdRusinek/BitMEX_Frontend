import React, {Component} from "react";
import Order from "./Order/Order";
import Position from "./Position/Position";
import {connect} from "react-redux";
import {getLimitOrders} from "../actions/orderActions";
import {getPositions} from "../actions/positionActions";
import {getStopOrders} from "../actions/stopActions";
import {getWaitingTrailingStops} from "../actions/trailingActions";
import PropTypes from "prop-types";
import OrderHeadTable from "./Order/OrderHeadTable";
import PositionHeadTable from "./Position/PositionHeadTable";
import StopHeadTable from "./Stop/StopHeadTable";
import Stop from "./Stop/Stop";
import WaitingTrailingStopHeadTable from "./WaitingTrailingStop/WaitingTrailingStopHeadTable";
import WaitingTrailingStop from "./WaitingTrailingStop/WaitingTrailingStop";
import AddWaitingTrailingStopButton from "./WaitingTrailingStop/AddWaitingTrailingStopButton";
import {css} from "./UserDashboard.css";

class Dashboard extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPositions(id);
        this.props.getOrdersLimit(id);
        this.props.getStops(id);
        this.props.getWaitingTrailingStops(id);
    }

    render() {
        const {id} = this.props.match.params;
        const {positions} = this.props.position;
        const {orders} = this.props.order;
        const {stops} = this.props.stop;
        const {waitingTrailingStops} = this.props.waitingTrailingStop;

        return (
            <div className="user-dashboard container">
                <div className="col-sm-12">
                    {waitingTrailingStops.length <= 4 &&
                    < AddWaitingTrailingStopButton accountId={id}/>
                    }
                    <div className="user-dashboard-element">
                        <WaitingTrailingStopHeadTable/>
                        {waitingTrailingStops.map(waitingTrailingStop => (
                            <WaitingTrailingStop
                                key={waitingTrailingStop.id}
                                waitingTrailingStop={waitingTrailingStop}
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
    position: PropTypes.object.isRequired,
    getPositions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    order: state.order,
    stop: state.stop,
    position: state.position,
    waitingTrailingStop: state.waitingTrailingStop
});

export default connect(mapStateToProps, {
    getOrdersLimit: getLimitOrders,
    getStops: getStopOrders,
    getPositions,
    getWaitingTrailingStops
})(Dashboard);
