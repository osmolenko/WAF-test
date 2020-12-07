import React from 'react';
import { connect } from 'react-redux';

import {closeModal} from "../redux/actions";
import {AddCardBG} from "../styled/AddCard.styled";

class ModalContainer extends React.Component {

    closeModal = () => {
        const { closeModal, onClose = () => {} } = this.props;
        closeModal();
        onClose();
    };

    render() {
        const { modalType } = this.props;

        const SpecificModal = modalType;

        return (
            <div>
                {modalType && (
                    <div>
                        <AddCardBG
                            onClick={this.closeModal}
                        />
                        <SpecificModal {...this.props} />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ ...state.modalReducer });
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
