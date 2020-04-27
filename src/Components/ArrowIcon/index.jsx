import React from 'react'
import { ReactComponent as Icon } from '../../assets/images/down-arrow.svg'
import styled from 'styled-components'

const StyledArrowIcon = styled(Icon)`
  transform: ${props => props.transform};
  transition: transform .2s linear;
  height: 14px;
  fill: ${props => props.color};
`

export const ArrowIcon = ({ color, rotated }) => (
  <StyledArrowIcon
    color={color}
    transform={rotated ? 'rotate(0)' : 'rotate(180)'} 
  />
)