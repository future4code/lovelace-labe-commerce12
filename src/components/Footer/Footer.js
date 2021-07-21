import React from "react";
import styled from "styled-components";

import Logo from "../../images/logo.png"

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      padding: 10px;
    }
  }

  img {
    width: 50%;
  }
`


export default class Footer extends React.Component {
    state = {
        inputValue: ""
    }

    onChangeInput = (e) => {
        this.setState({inputValue: e.target.value})
    }

    render() {
        return (
            <ContainerFooter>
                <div>
                    <h2>Receba Ofetas Exclusivas No Seu E-mail!</h2>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.onChangeInput}
                           placeholder={"Informe seu melhor e-mail..."}
                    />
                </div>

                <div>
                    <img src={Logo} alt="Logo footer"/>
                </div>
            </ContainerFooter>
        )
    }
}