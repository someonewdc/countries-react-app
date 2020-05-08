import React from 'react'
import styled from 'styled-components'

const StyledContentError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 180px);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
  font-size: 30px;
`

export const ContentError = () => <StyledContentError>Network error, please try again later</StyledContentError>
