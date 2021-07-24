import React from 'react'
import * as All from "./ShoppingCart.styles"

import ShoppingCartItem from "./ShoppingCartItem";

export class ShoppingCart extends React.Component {


    render() {
        return (
            <All.Container>


                <All.CarrinhoContent>

                    <ShoppingCartItem
                        produtoCart={this.props.produto}
                        removerDoCarrinho={this.props.removerDoCarrinho}
                    />

                </All.CarrinhoContent>


            </All.Container>
        )
    }
}
