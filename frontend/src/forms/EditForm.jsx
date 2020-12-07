import React from "react";
import {Field, reduxForm, submit} from "redux-form";
import {CardButton, EditCardInput} from "../styled/Card.styled";
import {connect} from "react-redux";
import {getSingleHotdog, updateHotdog} from "../redux/actions";

//поле формы
const renderField = ({  readonly, input, label, type, meta: { touched, error } }) => (
    <div>
        <EditCardInput {...input} placeholder={label} disabled={readonly} type={type}  />
        {touched && error && <span>{error}</span>}
    </div>
)

//Костыль получения функции this.props.edit. Часть 1
let cmd
function submitEdit(values){
    cmd(values)
}

class EditForm extends React.Component {

    //Получение данных хот-дога для получения initialValue
    componentDidMount() {
        this.props.getSingleHotdog(this.props.data.id)
    }

    render(){
        //проброс отправки формы для redux-form
        const { handleSubmit } = this.props

        //Костыль. Часть 2
        cmd = this.props.edit

        return(
            <form onSubmit={handleSubmit} key={this.props.data.id}>
                <Field readonly name="id" type="text" component={renderField} label="ID"/>
                <Field name="name" type="text" component={renderField} label="Name"/>
                <Field name="price" type="text" component={renderField} label="Price"/>
                <Field name="description" type="text" component={renderField} label="Description"/>
                <Field name="link" type="text" component={renderField} label="Image link"/>
                <CardButton onClick={()=> this.props.submit()}>Save</CardButton>
            </form>
        )
    }
}

//Реорганизация данных в нужные для redux-form
function mapStateToProps(state) {
    return {
        initialValues: {
            id: state.hotdogReducer.hotdog.id,
            name: state.hotdogReducer.hotdog.name,
            price: state.hotdogReducer.hotdog.price,
            description: state.hotdogReducer.hotdog.description,
            link: state.hotdogReducer.hotdog.link
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSingleHotdog: id => dispatch(getSingleHotdog(id)), //Получение 1 хот-дога
        edit: hotdog => dispatch(updateHotdog(hotdog)), //Добавление нового хот-дога
        submit: () => dispatch(submit('editCard')) //Подтверждение формы
    }
};

EditForm = reduxForm({
    form: 'editCard',
    onSubmit: submitEdit,
    enableReinitialize : true
})(EditForm)

export default EditForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditForm)

