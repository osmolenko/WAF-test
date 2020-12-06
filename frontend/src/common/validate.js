import store from "../redux/store";

export default function validate(values){
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
