import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import {getData} from "../redux/actions";
import {CardsList} from "../styled/MainPage.styled";

export class List extends React.Component {

    //Получение данных всех хот-догов.
    componentDidMount() {
        this.props.getData();
    }

    render() {

        return (
            <CardsList>
                {this.props.hotdogs.map((el, index) => (
                    <Card
                        index={index}
                        key={el.id}
                        id={el.id}
                        link={el.link}
                        name={el.name}
                        price={el.price}
                        description={el.description}
                    />
                ))}
            </CardsList>
        )
    }
};


function mapStateToProps(state) {
    return {
        hotdogs: state.hotdogReducer.hotdogs.slice(0, 10)
    };
}


const ListCards = connect(
    mapStateToProps,
    {getData}
)(List);

export default ListCards;
