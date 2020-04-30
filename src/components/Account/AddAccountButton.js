import React, {Component} from "react";
import Modal from "react-modal";
import {css} from "./AccountStyles.css";
import AddAccount from "./AddAccount";
import {closeModalClearState} from "../../actions/commonActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const customStyles = {
    content: {
        height: "500px"
    }
};

export class AddAccountButton extends Component {
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
            <div className="add-account-content">
                <React.Fragment>
                    <button
                        type="button"
                        className="account-modal-button"
                        onClick={this.handleOpenModal}
                    >
                        <i className="fa fa-address-card-o"/> Add Account
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
                        <AddAccount closeModal={this.handleCloseModal}/>
                    </Modal>
                </React.Fragment>
            </div>
        );
    }
}

AddAccountButton.propTypes = {
    closeModalClearState: PropTypes.func.isRequired
};

export default connect(null, {closeModalClearState})(AddAccountButton);
