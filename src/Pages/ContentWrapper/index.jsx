import React from 'react'
import styled from 'styled-components'
import { ContentItemsWrapper } from '../../Components/ContentItemsWrapper'
import { ContentSearch } from '../../Components/ContentSearch'
import { ContentDropdown } from '../../Components/ContentDropdown'
import { ContentError } from '../../Components/NetworkError';
import { ContentPlaceholder } from '../../Components/ContentPlaceholder';
import { useSelector } from 'react-redux';

const StyledContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 45px;
  box-shadow: inset 0px 4px 10px -4px rgba(0, 0, 0, 0.15);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
`

const ContentActions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentWrapper = () => {  

  const error = useSelector(({ mainPage }) => mainPage.error)
  const isPlaceholder = useSelector(({ mainPage }) => mainPage.isPlaceholder)

  return (
    <StyledContentWrapper>
      <div className="container">
        <ContentActions>
          <ContentSearch />
          <ContentDropdown />
        </ContentActions>
        {error 
          ? <ContentError />
          : isPlaceholder ? <ContentPlaceholder /> : <ContentItemsWrapper />
        }
      </div>
    </StyledContentWrapper>
)}
