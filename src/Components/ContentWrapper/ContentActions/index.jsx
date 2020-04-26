import React from 'react'
import { ContentSearch } from './ContentSearch';
import { ContentDropdown } from './ContentDropdown';
import styled from 'styled-components'

const StyledContentActions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentActions = () => {
  return (
    <StyledContentActions>
      <ContentSearch />
      <ContentDropdown />
    </StyledContentActions>
  )
}