import styled from 'styled-components'

export const ViewOptionsComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 150px;
  flex-flow: column nowrap;
`

export const ViewsDiv = styled.div`
  color: ${p => p.theme.colors.softPink};
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  width: 30px;
`
