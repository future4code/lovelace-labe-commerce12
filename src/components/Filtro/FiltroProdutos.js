import { render } from '@testing-library/react';
import React from 'react';


export default class FiltroProdutos extends React.Component{
  state= {
      valorMinimo:"9.00",
      valorMaximo:"1000.00",
      buscarProduto:"produto",
      estoque: [
        { id: 1, produto: 'Foguete', valor: '100.00' },
        { id: 2, produto: 'Jato', valor: '10.00' },
        { id: 3, produto: 'Aeronave', valor: '200.00' }
    ]
}

onChangevalorMinimo = (event) =>{
    this.setState({valorMinimo: event.target.value})

}

onChangevalorMaximo = (event) =>{
    this.setState({valorMaximo: event.target.value})

}

onChangebuscarProduto = (event) =>{
    this.setState({buscarProduto: event.target.value})



}



render(){
    return(
      <div>
          <h2>Filtro</h2>
          <br/>
           <h5>Valor Mínimo:</h5>
          <input value = {this.state.valorMinimo}
          type = "number"
          onChange = {this.onChangevalorMinimo}
          placeholder = "Digite o Valor"/> 
          
        <h5>Valor Máximo:</h5>
          <input value = {this.state.valorMáximo}
          type = "number"
          onChange = {this.onChangevalorMaximo}
          placeholder = "Digite o Valor" />
        
          <h5>Buscar Produto</h5>
          <input value = {this.state.buscarProduto}
          type = "text"
          onChange = {this.onChangebuscarProduto}
          placeholder = "Digite o nome do Produto"/>


      </div>
      
    )
}

}
