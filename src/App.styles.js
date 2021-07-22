import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid #000;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid #000;
`
export const Main = styled.main`
  /* Take the remaining height */
  flex-grow: 1;

  /* Layout the left sidebar, main content and right sidebar */
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`

//PRODUTOS

export const Center = styled.article`
  /* Take the remaining width */
  flex-grow: 1;
  border: 1px solid #000;
  padding: 10px;
  margin: auto 10px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  label{
    padding-right: 10px;
  }
  
  select {
    cursor: pointer;
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  //height: 100%;
  //overflow-x: hidden;
  //overflow-y: scroll;
`

//FILTRO

export const Left = styled.aside`
  width: 25%;
  border: 1px solid #000;
  padding: 10px;
  margin: auto 10px;
`



// export const Right = styled.nav`
//   width: 20%;
//   border: 1px solid #000;
//   padding: 10px;
//   margin: auto 10px;
// `


//FOOTER

export const Footer = styled.footer`
  /* Banner is displayed at the bottom */
  //bottom: 0;
  //left: 0;
  //position: fixed;
  width: 100%;

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Banner = styled.div`
  /* Take available width */
  flex: 1;
  background-color: #2C3531;
  padding: 10px;
`


