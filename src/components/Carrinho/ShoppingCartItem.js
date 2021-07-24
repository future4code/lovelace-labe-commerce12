import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div{
    display: flex;
    justify-content: space-between;

    img {
      width: 20%;
    }
  }
`


export default class ShoppingCartItem extends React.Component {
    render() {
        return (
                <ItemContainer>
                    <img src={this.props.produtoCart.imageUrl} alt={"imagem"+ this.props.produtoCart.name}/>
                    <p>{this.props.produtoCart.name}</p>

                    <p>{this.props.produtoCart.quantidadeProduto}X</p>

                    <button onClick={this.props.removerDoCarrinho}>Remover</button>
                </ItemContainer>
        )
    }
}