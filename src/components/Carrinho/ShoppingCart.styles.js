import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 8px;
  border: 1px solid #000;

  button {
    padding: 5px;
    border-radius: 5px;
  }
`


export const CarrinhoContent = styled.div`
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

