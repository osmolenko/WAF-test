import {FloatButton, MainDiv} from "../styled/MainPage.styled";
import ListCards from "../components/ListCards";
import AddCard from "../components/AddCard";
import {connect} from "react-redux";
import {closeModal, openModal} from "../redux/actions";
import ModalContainer from "../components/ModalContainer";
import * as React from "react";

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <MainDiv>
                    <ListCards/>
                </MainDiv>
                <FloatButton onClick={ () => {
                    this.props.openModal({
                    modalType: AddCard,
                    modalProps: {
                        button: {onClick: () => this.props.closeModal()}
                    }
                })}}>&#43;</FloatButton>
                <ModalContainer/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: modalParams => dispatch(openModal(modalParams)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(MainPage);



