import React from "react";
import * as All from "./Card.styles"
import {CardContent} from "./Card.styles";

export default class Card extends React.Component {

    render() {
        return (
            <All.Container>
                <All.Card>
                    <All.CardCover>
                        <img src={this.props.cover} alt={"Imagem do produto"}/>
                    </All.CardCover>

                    <All.CardContent>
                            <h3>{this.props.productName}</h3>

                            <p>R$ {this.props.productPrice}</p>

                    </All.CardContent>

                    <div>
                        <button onClick={this.props.addCarrinho}>Adicionar ao Carrinho</button>
                    </div>
                </All.Card>
            </All.Container>
        )
    }
}