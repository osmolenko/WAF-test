import {
    CardInfoDiv,
    CardH1,
    CardImg,
    CardPrice,
    CardInfo,
    CardDiv,
    CardButton
} from '../styled/Card.styled'
import {connect} from "react-redux";
import {delHotdog, tabClicked} from "../redux/actions";
import React from 'react';
import {submit} from "redux-form";
import EditHotdogForm from "../forms/EditHotdogForm";


export function submitAdd(values){
    const { name, price, description, link} = values
    console.log(values)
}

class Card extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2
        }
    }
    render(){

        const {link, name, price, description, id} = this.props
        return(
            <CardDiv>
                <CardImg src={link}/>
                <div>
                    <CardInfoDiv>
                        <CardH1>{name}</CardH1>
                        <CardPrice>{price} UAH</CardPrice>
                        <CardInfo>{description}</CardInfo>
                    </CardInfoDiv>
                    <CardButton>Edit</CardButton>
                    {/*<CardButton onClick={()=>this.setState({ activeTab : 2})}>Edit</CardButton>*/}
                    <CardButton onClick={()=>this.props.delHotDog({id})}>Delete</CardButton>
                </div>


            </CardDiv>
        )

    }
}

function mapStateToProps(state) {
    return {
        activeTab: state.tabsReducer.activeTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tabClicked,
        delHotDog: hotdog => dispatch(delHotdog(hotdog)),
        submit: () => dispatch(submit('EditHotdogForm'))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
