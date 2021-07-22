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
                value: 10000.00,
                imageUrl: "https://picsum.photos/id/231/300/300",
            },
            {
                id: 2,
                name: "Traje Espacial",
                value: 550.00,
                imageUrl: "https://picsum.photos/id/335/300/300",
            },
            {
                id: 3,
                name: "Bateria",
                value: 123.43,
                imageUrl: "https://picsum.photos/id/423/300/300",
            },
            {
                id: 4,
                name: "Tanque de oxigênio",
                value: 200.00,
                imageUrl: "https://picsum.photos/id/321/300/300",
            },
            {
                id: 5,
                name: "Capace",
                value: 330.00,
                imageUrl: "https://picsum.photos/id/223/300/300",
            }

        ],
        filtroProdutos: ""
    }

    componentDidMount() {

    }

    onClickHome = () => {

    }

    onClickCart = () => {

    }

    onChangeFilter = (e) => {
        const option = e.target.value
        let listaProdutosFiltrados

        if (option === "crescente") {
            listaProdutosFiltrados = this.state.produtos.sort((a, b)=>{
                return a.value - b.value
            })


            this.setState({
                produtos: listaProdutosFiltrados,
                filtroProdutos: option
            })
        } else {

            listaProdutosFiltrados = this.state.produtos.sort((a, b)=>{
                return a.value - b.value
            }).reverse()
            

            this.setState({
                produtos: listaProdutosFiltrados,
                filtroProdutos: option
            })
        }
    }

    addCarrinho = () => {

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
        // let listaProdutosFiltrados = this.state.produtos.filter((produto) => {
        //     switch (this.state.filtroProdutos) {
        //         case "crescente":
        //             return listaProdutosFiltrados = this.state.produtos.sort((a, b)=>{
        //                 return a.value - b.value
        //             })
        //
        //         case "decrescente":
        //             return listaProdutosFiltrados = this.state.produtos.sort((a, b)=>{
        //                 return a.value - b.value
        //             }).reverse()
        //     }
        // })



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
                                <select value={this.state.filtroProdutos} onChange={this.onChangeFilter}>
                                    <option value="crescente">Crescente</option>
                                    <option value="decrescente">Decrescente</option>
                                </select>
                            </div>
                        </All.CardHeader>

                        <All.CardContainer>

                            {/*{listaProdutosFiltrados.map((produto) => {*/}
                            {/*    return (*/}
                            {/*        <Card key={produto.id}*/}
                            {/*              cover={produto.imageUrl}*/}
                            {/*              productName={produto.name}*/}
                            {/*              productPrice={produto.value}*/}
                            {/*              addCarrinho={this.addCarrinho}*/}
                            {/*        />*/}
                            {/*    )*/}
                            {/*})}*/}

                            {this.state.produtos.map((produto) => {
                                return (
                                    <Card key={produto.id}
                                          cover={produto.imageUrl}
                                          productName={produto.name}
                                          productPrice={produto.value}
                                          addCarrinho={this.addCarrinho}
                                    />
                                )
                            })}




                        </All.CardContainer>
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
