import React, {Component} from "react";
import Modal from "react-modal";
import {css} from "../Account/AccountStyles.css";
import AddAlert from "./AddAlert";
import {closeModalClearState} from "../../actions/commonActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const customStyles = {
    content: {
        height: "500px"
    }
};

export class AddAlertButton extends Component {
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
            <div className="add-alert-content">
                <React.Fragment>
                    <button
                        type="button"
                        className="alert-modal-button"
                        onClick={this.handleOpenModal}
                    >
                        <i className="fa fa-bell-o"/> Add Alert
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
                        <AddAlert closeModal={this.handleCloseModal}/>
                    </Modal>
                </React.Fragment>
            </div>
        );
    }
}

AddAlertButton.propTypes = {
    closeModalClearState: PropTypes.func.isRequired
};

export default connect(null, {closeModalClearState})(AddAlertButton);
