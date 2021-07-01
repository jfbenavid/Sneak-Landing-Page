import styled from 'styled-components'

export const SectionComponent = styled.section`
  min-height: 300px;
  background-color: ${p => p.theme.colors.softPink};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.background};
  padding: 50px 0;
  margin-bottom: 25px;

  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    font-family: ${p => p.theme.fonts.secondary};
    font-size: 2.5em;
    margin-top: 0;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 100;
  }
`
