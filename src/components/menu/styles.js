import styled from 'styled-components'

export const MenuComponent = styled.div`
  color: ${p => p.theme.colors.softPink};
  display: flex;
  font-size: 2em;
  align-items: center;

  @media (min-width: 769px){
    .hamburger-react {
      display: none;
    }
  }
`
