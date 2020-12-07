import React from 'react';
import {AddCardButton, AddCardDiv, AddCardH1, AddCardClose, AddCardInput} from "../styled/AddCard.styled";
import {addHotdog} from "../redux/actions";
import {connect} from "react-redux";
import {Field, reduxForm, submit} from "redux-form";
import validate from "../common/validate";

//Поле форм
const renderField = ({input, label, type, meta: { touched, error }}) => (
    <div>
        <AddCardInput {...input} placeholder={label} type={type}/>
        <br/>
        {touched && error && <span>{error}</span>}
    </div>
)

//Костыль получения функции this.props.add. Часть 1
let cmd
function submitAdd(values){
    cmd(values)
}


class Add extends React.Component{

    render(){

        //проброс функции кнопки для модального окна
        const { button } = this.props.modalProps;
        //проброс отправки формы для redux-form
        const { handleSubmit } = this.props

        //Костыль. Часть 2
        cmd = this.props.add

        return(
                <AddCardDiv>
                    <AddCardClose {...button} >&#10006;</AddCardClose>
                    <AddCardH1>Add new hot-dog</AddCardH1>

                    <form onSubmit={handleSubmit}>
                        <Field name="name" type="text" component={renderField} label="Name"/>
                        <Field name="price" type="number" component={renderField} label="Price"/>
                        <Field name="description" type="text" component={renderField} label="Description"/>
                        <Field name="link" type="text" component={renderField} label="Link"/>
                        <AddCardButton type='button' onClick={()=> this.props.submit()}>Add</AddCardButton>
                    </form>

                </AddCardDiv>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: hotdog => dispatch(addHotdog(hotdog)), //Добавление нового хот-дога
        submit: () => dispatch(submit('AddHotdogForm')) //Подтверждение формы
    };
}


const AddCard = connect(
    null,
    mapDispatchToProps
)(Add);

export default reduxForm({
    form: 'AddHotdogForm',
    validate,
    onSubmit: submitAdd
})(AddCard);;


