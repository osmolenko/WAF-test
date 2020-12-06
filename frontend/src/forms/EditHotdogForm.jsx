import React from "react";
import {Field, reduxForm} from "redux-form";
import {validate} from "../components/AddCard";
import {submitAdd} from "../components/Card";
import {EditCardInput} from "../styled/Card.styled";

const renderField = ({input, label, type, value, meta: { touched, error }}) => (
    <div>
        <EditCardInput {...input} placeholder={label} type={type} />
        <br/>
        {touched && error && <span>{error}</span>}
    </div>
)

class AddHotdogForm extends React.Component{
    render(){

        const { handleSubmit } = this.props
        const {id, name, link, description } = this.props.data

        console.log(this.props.data)
        return(
            <div>
                <form form={id} onSubmit={handleSubmit}>
                    <Field input={{ value: name}} name="name" type="text" component={renderField} label="Name"/>
                    <Field name="price" type="number" component={renderField} label="Price"/>
                    <Field name="description" type="text" component={renderField} label="Description"/>
                    <Field value={link} name="link" type="text" component={renderField} label="Link"/>
                    <Field input={{ value: id}} readonly type="text" component={renderField} label="ID"/>
                </form>
            </div>
        )
    }
}


export default reduxForm({
    form: `EditHotdogForm`,
    onSubmit: submitAdd,
    validate
})(AddHotdogForm)
