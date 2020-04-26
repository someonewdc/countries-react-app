import React from 'react'
import { ReactComponent as Icon } from '../../assets/images/moon.svg'
import styled from 'styled-components'

const StyledMoonIcon = styled(Icon)`
  height: 16px;
  fill: ${props => props.color}
`

export const MoonIcon = ({ color }) => (
  <StyledMoonIcon color={color}/>
)