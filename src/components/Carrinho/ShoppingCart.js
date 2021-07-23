import React from 'react'
import {ShoppingCartItem} from './ShoppingCartItem'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 8px;

  button {
    padding: 5px;
    border-radius: 5px;
  }
`

const CartListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export class ShoppingCart extends React.Component {


    render() {
        return (
            <ShoppingCartContainer>
                <h2>Carrinho:</h2>

                <CartListContainer>
                    {/*{this.props.produto.quantidadeProduto !== 0 ?*/}
                    {/*    <div>*/}
                    {/*        <p>{this.props.produto.quantidadeProduto}X</p>*/}
                    {/*    </div>*/}

                    {/*    <div>*/}
                    {/*    <p>{this.props.produto.name}</p>*/}
                    {/*    </div>*/}

                    {/*    <button onClick={this.props.removerDoCarrinho}>Remover</button>*/}

                    {/*    : ""*/}
                    {/*}*/}
                </CartListContainer>


            </ShoppingCartContainer>
        )
    }
}
