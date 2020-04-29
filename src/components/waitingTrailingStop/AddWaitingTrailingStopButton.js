import React, {Component} from 'react';
import Modal from "react-modal";
import {css} from ".//TrailingStylees.css";
import {connect} from "react-redux";
import {closeModalClearState} from "../../actions/commonActions";
import PropTypes from "prop-types";
import AddTrailing from "./AddWaitingTrailingStop";

const customStyles = {
    content: {
        height: "500px"
    }
};

export class AddWaitingTrailingStopButton extends Component {
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
            <div>
                <React.Fragment>
                    <button
                        type="button"
                        className="btn btn-outline-primary mb-3 text-left"
                        onClick={this.handleOpenModal}
                    >
                        <i className="far fa-plus-square"/> Add Trailing Stop
                    </button>
                    <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} style={customStyles}
                           ariaHideApp={false}>
                        <button
                            type="button"
                            className="btn btn-danger mb-2"
                            onClick={this.handleCloseModal}
                        >
                            <i className="far fa-times-circle mr-1 "/>
                            Close Modal
                        </button>
                        <AddTrailing paramsAccountId={this.props.accountId} closeModal={this.handleCloseModal}/>
                    </Modal>
                </React.Fragment>
            </div>
        );
    }
}

AddWaitingTrailingStopButton.propTypes = {
    closeModalClearState: PropTypes.func.isRequired
};

export default connect(null, {closeModalClearState})(AddWaitingTrailingStopButton);
