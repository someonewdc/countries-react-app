import React from 'react'
import styled from 'styled-components'
import { ContentError } from '../../Components/NetworkError';
import { useSelector } from 'react-redux';
import { HomeSearch } from '../../Components/HomeSearch';
import { HomeDropdown } from '../../Components/HomeDropdown';
import { HomePlaceholder } from '../../Components/HomePlaceholder';
import { HomeItemsWrapper } from '../../Components/HomeItemsWrapper';

const StyledHomeWrapper = styled.main`
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

export const HomeWrapper = () => {  

  const error = useSelector(({ mainPage }) => mainPage.error)
  const isPlaceholder = useSelector(({ mainPage }) => mainPage.isPlaceholder)

  return (
    <StyledHomeWrapper>
      <div className="container">
        <ContentActions>
          <HomeSearch />
          <HomeDropdown />
        </ContentActions>
        {error 
          ? <ContentError />
          : isPlaceholder ? <HomePlaceholder /> : <HomeItemsWrapper />
        }
      </div>
    </StyledHomeWrapper>
)}
