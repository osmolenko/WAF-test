import React from "react";
import {AddCardInput} from "../styled/AddCard.styled";
import {Field, reduxForm} from "redux-form";
import {submitAdd, validate} from "../components/AddCard";

const renderField = ({input, label, type, meta: { touched, error }}) => (
    <div>
        <AddCardInput {...input} placeholder={label} type={type}/>
        <br/>
        {touched && error && <span>{error}</span>}
    </div>
)

class AddHotdogForm extends React.Component{
    render(){

        const { handleSubmit } = this.props

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="name" type="text" component={renderField} label="Name"/>
                    <Field name="price" type="number" component={renderField} label="Price"/>
                    <Field name="description" type="text" component={renderField} label="Description"/>
                    <Field name="link" type="text" component={renderField} label="Link"/>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'EditHotdogForm',
    onSubmit: submitAdd,
    validate
})(AddHotdogForm)
