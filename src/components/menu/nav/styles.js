import styled from 'styled-components'

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: ${p => p.theme.colors.background};
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  margin-top: 55px;
  height: 100vh;
  width: 300px;
  padding: 0;
  transition: transform 0.3s ease-in-out;

  li {
    text-transform: capitalize;
    color: ${p => p.theme.colors.black};
    padding: 10px 20px;
  }

  @media (min-width: 769px) {
    font-size: 0.5em;
    flex-flow: row nowrap;
    transform: unset;
    margin: 0;
    position: initial;
    top: auto;
    right: auto;
    background-color: unset;
    height: auto;
    width: auto;

    li {
      margin: 0 5px;
      padding: 2px 5px;
    }
  }
`
