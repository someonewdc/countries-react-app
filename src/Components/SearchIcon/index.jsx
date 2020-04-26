import React from 'react'
import { ReactComponent as Icon } from '../../assets/images/search.svg'
import styled from 'styled-components'

const StyledSearchIcon = styled(Icon)`
  height: 18px;
  fill: ${props => props.color}
`

export const SearchIcon = ({ color }) => (
  <StyledSearchIcon color={color}/>
)