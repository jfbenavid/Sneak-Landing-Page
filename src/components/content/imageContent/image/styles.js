import styled from 'styled-components'

export const Figure = styled.figure`
  background-color: #f6f6f6;
  padding: 7px;
  margin: 0;

  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
