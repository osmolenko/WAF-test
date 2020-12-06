import React from 'react';
import {AddCardButton, AddCardDiv, AddCardH1, AddCardClose} from "../styled/AddCard.styled";
import {addHotdog} from "../redux/actions";
import {connect} from "react-redux";
import store from "../redux/store";
import AddHotdogForm from "../forms/AddHotdogForm";
import {submit} from "redux-form";


export function validate(values){
    const errors = {}
    const st = store.getState()

    if(st.hotdogReducer.hotdogs.find(item => item.name === values.name)){
        errors.name = 'This name is already in use'
    }

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.price) {
        errors.price = 'Required'
    }
    if (!values.description) {
        errors.description = 'Required'
    }
    if (!values.link) {
        errors.link = 'Required'
    }

    return errors
}

export function submitAdd(values){
    const { name, price, description, link} = values
    console.log(values)
}

class Form extends React.Component{

    render(){

        const { button } = this.props.modalProps;

        return(
                <AddCardDiv>
                    <AddCardClose {...button} >&#10006;</AddCardClose>
                    <AddCardH1>Add new hot-dog</AddCardH1>
                    <AddHotdogForm/>
                    <AddCardButton type='button' onClick={() => this.props.submit()}>Add</AddCardButton>
                </AddCardDiv>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addHotdog: hotdog => dispatch(addHotdog(hotdog)),
        submit: () => dispatch(submit('AddHotdogForm'))
    };
}

function mapStateToProps(state) {
    return {
        hotdogs: state.hotdogReducer.hotdogs
    };
}

const AddCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default AddCard;


