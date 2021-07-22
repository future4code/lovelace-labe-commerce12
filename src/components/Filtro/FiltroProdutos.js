import {render} from '@testing-library/react';
import React from 'react';


export default class FiltroProdutos extends React.Component {
    state = {
        valorMinimo: this.props.min,
        valorMaximo: this.props.max,
        buscarProduto: "",

    }

    onChangeValorMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})

        this.props.menorValor(event.target.value)
    }

    onChangeValorMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})

        this.props.maiorValor(event.target.value)
    }

    onChangeBuscarProduto = (event) => {
        this.setState({buscarProduto: event.target.value})
        this.props.buscarProduto(event.target.value)
    }


    render() {
        return (
            <div>
                <h2>Filtro</h2>
                <br/>
                <h5>Valor Mínimo:</h5>
                <input value={this.state.valorMinimo}
                       type="number"
                       onChange={this.onChangeValorMinimo}
                       placeholder="Digite o Valor"

                />

                <h5>Valor Máximo:</h5>
                <input value={this.state.valorMaximo}
                       type="number"
                       onChange={this.onChangeValorMaximo}
                       placeholder="Digite o Valor"/>

                <h5>Buscar Produto</h5>
                <input value={this.state.buscarProduto}
                       type="text"
                       onChange={this.onChangeBuscarProduto}
                       placeholder="Digite o nome do Produto"/>


            </div>

        )
    }

}
