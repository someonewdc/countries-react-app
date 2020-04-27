import React from 'react'
import { ContentActions } from './ContentActions';
import styled from 'styled-components'
import { ContentItemsWrapper } from './ContentItemsWrapper';

const StyledContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 45px;
  box-shadow: inset 0px 4px 10px -4px rgba(0, 0, 0, 0.15);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
`

export const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <div className="container">
        <ContentActions />
        <ContentItemsWrapper />
      </div>
    </StyledContentWrapper>
  )
}
