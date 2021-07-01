import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const LogoComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;

  div {
    text-transform: uppercase;
  }

  div > h4 {
    margin: 0;
    margin-block-end: 0;
    letter-spacing: 5px;
    font-size: 1.5em;
  }

  div > span {
    color: #dbe6dd;
    font-size: .9em;
    letter-spacing: 2px;
  }
`

export const IconBackgroundComponent = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${p => p.theme.colors.black};
  border-right: 10px solid ${p => p.theme.colors.black};
  margin-left: 10px;

  &::after {
    content: '';
    position: absolute;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid ${p => p.theme.colors.background};
    top:-8px;
    left:-9px;
  }

  &::before {
    content: '';
    position: absolute;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid ${p => p.theme.colors.background};
    top:-8px;
    left:1px;
  }

  svg {
    position: absolute;
    left: -13px;
    top: -16px;
    z-index: 1;
  }
`

export const IconFilledComponent = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid ${p => p.theme.colors.strongPink};
  left: -15px;
  top: -5px;
  z-index: 1;
`

export const IconNonFilledComponent = () => (
  <svg width={26} height={25} xmlns='http://www.w3.org/2000/svg'>
    <path
      fill='none'
      stroke={theme.colors.black}
      d='M0 25L13 5l13 20z' />
  </svg>
)
