import React, {Component} from "react";
import Modal from "react-modal";
import {css} from "./AccountStyles.css";
import AddAccount from "./AddAccount";
import {closeModalClearState} from "../../actions/commonActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const customStyles = {
    content: {
        marginTop: '90px',
        marginBottom: '90px',
        marginLeft: '150px',
        marginRight: '150px',
        backgroundColor: 'gray',
        borderRadius: '20px'
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
                    <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}
                           className="Modal" overlayClassName="Overlay"
                           ariaHideApp={false}>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={this.handleCloseModal}
                        >
                            <div className="logo">
                            <i className="fa fa-times"/>
                            </div>
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
