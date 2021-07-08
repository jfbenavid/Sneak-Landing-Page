import styled from 'styled-components'

export const ButtonComponent = styled.button`
  color: ${p => p.isActive ? p.textColor ?? p.theme.colors.background : p.textColor ?? p.theme.colors.black};
  background-color: ${p => p.isActive ? p.color ?? p.theme.colors.strongPink : p.color ?? p.theme.colors.background};
  font-family: ${p => p.theme.fonts.principal};
  border: 0;
  padding: 10px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: .9em;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`
