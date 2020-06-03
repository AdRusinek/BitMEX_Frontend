import React, {Component} from 'react';
import Modal from "react-modal";
import {css} from "../UserDashboard.css"
import {connect} from "react-redux";
import {closeModalClearState} from "../../actions/commonActions";
import PropTypes from "prop-types";
import AddTrailing from "./AddTrailingStop";

export class AddTrailingStopButton extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.props.closeModalClearState();
        this.setState({showModal: false});
    }

    render() {
        return (
            <div className="add-trailing-content">
                <React.Fragment>
                    <button
                        type="button"
                        className="trailing-modal-button"
                        onClick={this.handleOpenModal}
                    >
                        <i className="fa fa-line-chart"/> Add Trailing Stop
                    </button>
                    <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}
                           className="Modal" overlayClassName="Overlay" ariaHideApp={false}>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={this.handleCloseModal}
                        >
                            <i className="fa fa-window-close"/>
                        </button>
                        <AddTrailing paramsAccountId={this.props.accountId} closeModal={this.handleCloseModal}/>
                    </Modal>
                </React.Fragment>
            </div>
        );
    }
}

AddTrailingStopButton.propTypes = {
    closeModalClearState: PropTypes.func.isRequired
};

export default connect(null, {closeModalClearState})(AddTrailingStopButton);
