import React from 'react';
import * as All from "./App.styles"

//Componentes aqui em baixo:
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card";


class App extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 12,
                name: "Traje Espacial",
                value: 200.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 4,
                name: "Traje Espacial",
                value: 123.43,
                imageUrl: "https://picsum.photos/200/200",
            }
        ],
        filtroProdutos: "crescente"
    }

    onClickHome = () => {

    }

    onClickCart = () => {

    }


    //METODOS AUXILIARES
    pegaMenorValor = () => {
        const minValue = Math.min(...this.state.produtos.map((produto) => {
            return produto.value
        }))

        return minValue

        // console.log(minValue)
        // const menoresValores = this.state.produtos.filter((produto)=>{
        //     if (produto.value === minValue){
        //         return produto.value
        //     }
        // })
        //
        // console.log(menoresValores)
    }

    pegaMaiorValor = () => {
        const maxValue = Math.max(...this.state.produtos.map((produto) => {
            return produto.value
        }))

        return maxValue

        // console.log(maxValue)
        //
        // const maioresValores = this.state.produtos.filter((produto)=>{
        //     if (produto.value === maxValue){
        //         return produto.value
        //     }
        // })
        // console.log(maioresValores)
    }

    render() {
        const listaProdutosFiltrados = this.state.produtos.filter((produto) => {
            switch (this.state.filtroProdutos) {
                case "crescente":
                    return
            }
        })

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
                        <All.CardHeader>
                            <div>
                                <h4>Quantidade de Produtos: {this.state.produtos.length}</h4>
                            </div>

                            <div>
                                <label>Ordenar por:</label>
                                <select value={this.state.filter} onChange={this.onChangeFilter}>
                                    <option value="crescente">Crescente</option>
                                    <option value="decrescente">Decrescente</option>
                                </select>
                            </div>
                        </All.CardHeader>
                    </All.Center>

                    {/*<All.Right>*/}
                    {/*    <p>Carrinho aqui</p>*/}
                    {/*</All.Right>*/}
                </All.Main>

                <All.Footer>
                    <All.Banner>
                        <Footer/>
                    </All.Banner>

                </All.Footer>

            </All.Container>
        )
    }
}

export default App;
