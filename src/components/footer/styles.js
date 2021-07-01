import styled from 'styled-components'

export const FooterComponent = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 25px 0;

  p {
    text-transform: capitalize;
  }

  span {
    color: ${p => p.theme.colors.softPink};
  }

  div {
    display: flex;
    justify-content: space-between;
    width: auto;
    margin-top: 25px;
  }

  div > a {
    padding: 0 10px;
  }
`
