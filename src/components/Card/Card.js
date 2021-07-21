import React from "react";
import * as All from "./Card.styles"


export default class Card extends React.Component {

    render() {
        return (
            <All.Card>
                <All.CardCover>
                    <img src={this.props.cover} alt={"Imagem do produto"}/>
                </All.CardCover>

                <All.CardCover>
                    <h3>{this.props.productName}</h3>

                    <p>{this.props.productPrice}</p>
                </All.CardCover>

                <div>
                    <button onClick={this.props.addCarrinho}>Adicionar ao Carrinho</button>
                </div>
            </All.Card>
        )
    }
}