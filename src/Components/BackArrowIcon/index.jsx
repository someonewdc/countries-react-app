import React from 'react'
import { ReactComponent as Icon } from '../../assets/images/back-arrow.svg'
import styled from 'styled-components'

const StyledBackArrowIcon = styled(Icon)`
  height: 14px;
  fill: ${props => props.color};
`

export const BackArrowIcon = ({ color }) => <StyledBackArrowIcon color={color} />