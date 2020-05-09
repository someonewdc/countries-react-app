import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { CountryContent } from './CountryContent';
import { CountryFlag } from './CountryFlag';

const StyledCountryItemWrapper = styled.div`
  min-height: calc(100vh - 125px);
  padding-top: 80px; 
  display: flex;
  justify-content: space-between;
  
`

const LoaderWrapper = styled.div`
  min-height: calc(100vh - 125px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const CountryItem = () => {

  const loading = useSelector(({ countryPage }) => countryPage.loading)

  const currentCountry = useSelector(({ countryPage }) => countryPage.currentCountry)

  const { 
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders, 
      flag, 
    } = currentCountry

  if (loading) {
    return (
      <StyledCountryItemWrapper>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </StyledCountryItemWrapper>
    )
  }
  
  return (
    <StyledCountryItemWrapper>
      <CountryFlag flag={flag}/>
      <CountryContent 
        name={name}
        population={population}
        nativeName={nativeName}
        region={region}
        subregion={subregion}
        capital={capital}
        topLevelDomain={topLevelDomain && topLevelDomain[0]}
        currencies={currencies}
        languages={languages}
        borders={borders}
      />
    </StyledCountryItemWrapper>
  )
}
