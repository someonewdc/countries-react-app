import React from 'react'
import styled from 'styled-components'
import { ContentItem } from './ContentItem';
import { Loader } from '../Loader'
import { useSelector } from 'react-redux';

const StyledContentItemsWrapper = styled.ul`
  min-height: calc(100vh - 180px);
  padding-top: 45px;
  display: flex;
  flex-wrap: wrap;
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 225px);
`

export const ContentItemsWrapper = () => {

  const loading = useSelector(({ mainPage }) => mainPage.loading)
  const countries = useSelector(({ mainPage }) => mainPage.showingCountries)


  if (loading) return (
    <StyledContentItemsWrapper>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    </StyledContentItemsWrapper>
  )

  return (
    <StyledContentItemsWrapper>
      { countries.map(({
          name, 
          population, 
          region, 
          capital, 
          flag }, index) => (
          <ContentItem 
            key={`${name}${index}`}
            name={name}
            population={population}
            region={region}
            capital={capital}
            flag={flag}
          />
        ))
      }
    </StyledContentItemsWrapper>
  )
}
