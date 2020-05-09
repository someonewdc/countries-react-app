import React from 'react'
import styled from 'styled-components'
import { Loader } from '../Loader'
import { useSelector } from 'react-redux';
import { HomeItem } from './HomeItem';

const StyledHomeItemsWrapper = styled.ul`
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

export const HomeItemsWrapper = () => {

  const loading = useSelector(({ mainPage }) => mainPage.loading)
  const countries = useSelector(({ mainPage }) => mainPage.showingCountries)


  if (loading) return (
    <StyledHomeItemsWrapper>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    </StyledHomeItemsWrapper>
  )

  return (
    <StyledHomeItemsWrapper>
      { countries.map(({
          name, 
          population, 
          region, 
          capital, 
          flag,
          alpha3Code
         }, index) => (
          <HomeItem 
            key={`${name}${index}`}
            name={name}
            population={population}
            region={region}
            capital={capital}
            flag={flag}
            alpha3Code={alpha3Code}
          />
        ))
      }
    </StyledHomeItemsWrapper>
  )
}
