import React from 'react'
import * as All from "./ShoppingCart.styles"


export class ShoppingCart extends React.Component {


    render() {
        return (
            <All.Container>


                <All.CarrinhoContent>
                    {this.props.produto.quantidadeProduto !== 0 ?
                        <div>
                            <p>{this.props.produto.quantidadeProduto}X</p>
                            <p>{this.props.produto.name}</p>
                            <button onClick={this.props.removerDoCarrinho}>Remover</button>
                        </div>
                        : ""
                    }
                </All.CarrinhoContent>



            </All.Container>
        )
    }
}
