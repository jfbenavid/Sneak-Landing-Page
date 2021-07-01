import styled from 'styled-components'

export const ImageContentComponent = styled.div`
  display: inline-grid;
  grid-gap: 15px;
  grid-auto-flow: row dense;
  grid-auto-rows: 150px;
  max-width: 100%;
  margin-bottom: 25px;

  @media(min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1440px){
    grid-template-columns: repeat(4, 1fr);
  }

  figure:nth-child(1n) {
    grid-row: span 3;
  }

  figure:nth-child(2n) {
    grid-row: span 5;
  }

  figure:nth-child(3n) {
    grid-row: span 1;
  }

  figure:nth-child(4n),
  figure:nth-child(7n) {
    grid-row: span 2;
  }

  figure:nth-child(5n) {
    grid-row: span 3;
  }

  figure:nth-child(6n) {
    grid-row: span 4;
  }
`
