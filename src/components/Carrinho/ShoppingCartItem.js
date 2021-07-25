import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    img {
      width: 20%;
      margin-right: 20px;
    }  
  }
  
  button {
    padding: 5px;
    border-radius: 5px;

    :hover {
      color: #c44f00;
      cursor: pointer;
    }
  }

`


export default class ShoppingCartItem extends React.Component {
    render() {
        return (
            <ItemContainer>
                <div>
                    <img src={this.props.produtoCart.imageUrl} alt={"imagem" + this.props.produtoCart.name}/>
                    <p>{this.props.produtoCart.name}</p>
                </div>
                <p>{this.props.produtoCart.quantidadeProduto}X</p>

                <button onClick={() => this.props.removerDoCarrinho(this.props.produtoCart.id)}>Remover</button>
            </ItemContainer>
        )
    }
}