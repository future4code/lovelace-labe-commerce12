import React from 'react';
import * as All from "./App.styles"

//Componentes aqui em baixo:
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"
import { ShoppingCart } from './components/Carrinho/


class App extends React.Component {
    state = {}

    onClickHome = () => {

    }

    onClickCart = () => {
        
    }

        render() {
        return (
            <All.Container>
                <All.Header>
                    <Header/>
                </All.Header>

                <All.Nav>
                    <Nav
                        home={this.onClickHome}
                        cart={this.onClickCart}
                    />
                </All.Nav>

                <All.Main>
                    {/*{Left sidebar }*/}
                    <All.Left>
                        <p>filtro aqui</p>
                    </All.Left>


                    <All.Center>
                        <p>Cards produtos aqui</p>
                    </All.Center>

                    {/*<All.Right>*/}
                    {<ShoppingCart/>}
                    {/*</All.Right>*/}
                </All.Main>

                <All.Footer>
                    <All.Banner>
                        <Footer />
                    </All.Banner>

                </All.Footer>

            </All.Container>
        )
    }
}

export default App;
