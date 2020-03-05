import React, { Component } from "react";
import Order from "./order/Order";
import Position from "./position/Position";
import { connect } from "react-redux";
import { getOrdersLimit } from "../actions/orderActions";
import { getPositions } from "../actions/positionActions";
import { getStops } from "../actions/stopActions";
import { getWaitingTrailingStops } from "../actions/trailingStopActions";
import PropTypes from "prop-types";
import OrderHeadTable from "./order/OrderHeadTable";
import PositionHeadTable from "./position/PositionHeadTable";
import StopHeadTable from "./stop/StopHeadTable";
import Stop from "./stop/Stop";
import WaitingTrailingStopHeadTable from "./waitingTrailingStop/WaitingTrailingStopHeadTable";
import WaitingTrailingStop from "./waitingTrailingStop/WaitingTrailingStop";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getPositions();
    this.props.getOrdersLimit();
    this.props.getStops();
    this.props.getWaitingTrailingStops();
  }

  render() {
    const { positions } = this.props.position;
    const { orders } = this.props.order;
    const { stops } = this.props.stop;
    const { waitingTrailingStops } = this.props.waitingTrailingStop;

    return (
      <div>
        <br />
        <div className="orders">
          <div id="mainDashboardContainer" className="container">
            <div className="row">
              <div className="col-md-12">
                <hr />
                <WaitingTrailingStopHeadTable />
                {waitingTrailingStops.map(waitingTrailingStop => (
                  <WaitingTrailingStop
                    key={waitingTrailingStop.id}
                    waitingTrailingStop={waitingTrailingStop}
                  />
                ))}
                <StopHeadTable />
                {stops.map(stop => (
                  <Stop key={stop.orderID} stop={stop} />
                ))}
                <PositionHeadTable />
                {positions.map(position => (
                  <Position
                    key={position.openingTimestamp}
                    position={position}
                  />
                ))}
                <OrderHeadTable />
                {orders.map(order => (
                  <Order key={order.orderID} order={order} />
                ))}
              </div>
            </div>
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
  getOrdersLimit,
  getStops,
  getPositions,
  getWaitingTrailingStops
})(Dashboard);
