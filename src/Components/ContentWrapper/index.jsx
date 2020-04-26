import React from 'react'
import { ContentActions } from './ContentActions';
import styled from 'styled-components'

const StyledContentWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 45px 0;
  box-shadow: inset 0px 4px 10px -4px rgba(0, 0, 0, 0.15);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
`

export const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <div className="container">
        <ContentActions />
      </div>
    </StyledContentWrapper>
  )
}
