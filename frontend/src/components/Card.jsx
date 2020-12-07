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
import {delHotdog} from "../redux/actions";
import React from 'react';
import EditForm from '../forms/EditForm'


class Card extends React.Component{

    //рендер по кнопке
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        if(this.state.showComponent === false){
            this.setState({showComponent: true});
        } else {
            this.setState({showComponent: false});
        }
    }

    render(){
        const {link, name, price, description, id} = this.props

        return(
            <CardDiv key={id}>
                <CardImg src={link}/>
                <CardInfoDiv>
                    <CardH1>{name}</CardH1>
                    <CardPrice>{price} UAH</CardPrice>
                    <CardInfo>{description}</CardInfo>
                </CardInfoDiv>
                <CardButton onClick={()=>this.props.delHotDog({id})}>Delete</CardButton>
                <CardButton onClick={()=>this._onButtonClick()}>{this.state.showComponent ? 'Close' : 'Edit'}</CardButton>
                {/*      Render form if this.state.showComponent === true     */}
                {this.state.showComponent ? <EditForm data={this.props}/> : null}
            </CardDiv>
        )
            //
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delHotDog: hotdog => dispatch(delHotdog(hotdog))
    }
};



Card = connect(
    null,
    mapDispatchToProps
)(Card)

export default Card
