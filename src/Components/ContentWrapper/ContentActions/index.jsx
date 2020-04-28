import React from 'react'
import { ConnectedContentSearch } from './ContentSearch';
import { ContentDropdown } from './ContentDropdown';
import styled from 'styled-components'

const StyledContentActions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentActions = () => {
  return (
    <StyledContentActions>
      <ConnectedContentSearch/>
      <ContentDropdown />
    </StyledContentActions>
  )
}