import styled from 'styled-components'

export const HeaderComponent = styled.header`
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;

  @media(min-width: 1025px){
    padding: 10px 200px;
  }
`
