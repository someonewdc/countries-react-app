import React from 'react'
import styled from 'styled-components'
import { formatPopulation } from '../../../utils/formatPopulation';
import { Link } from 'react-router-dom';

const ContentWrapper = styled.div`
  padding: 50px 0 40px 0;
  height: 100%;
  width: 570px;
`

const CountryTitle = styled.h4`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 45px;
`

const CountryInformationWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 185px;

  & div {
    width: 50%;
  }

  & span {
    font-weight: 600;
  }
`

const CountryInformationItem = styled.p`
  margin-bottom: 15px;
  max-width: 225px;
`

const CountryBordersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`

const CountryBordersTitle = styled.h5`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  height: 30px;
`

const CountryBordersInner = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`

const CountryBorder = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 95px;
  height: 30px;
  background: hsl(209, 23%, 22%);
  box-shadow: inset 0px 4px 10px -4px rgba(0, 0, 0, 0.15);
  color: inherit;
  padding: 10px 40px 10px 30px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const CountryContent = ({ 
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
  }) => {
  
  let currenciesString = ''
  let languagesString = ''

  if (currencies) currenciesString = currencies.map(({ name }) => name).join(', ')
  if (languages) languagesString = languages.map(({ name }) => name).join(', ')
  

  return (
    <ContentWrapper>
      <CountryTitle>
        {name}
      </CountryTitle>
      <CountryInformationWrapper>
        <div>
          <CountryInformationItem><span>Native Name:</span>  {nativeName}</CountryInformationItem>
          <CountryInformationItem><span>Population:</span>  {population && formatPopulation(population)}</CountryInformationItem>
          <CountryInformationItem><span>Region:</span>  {region}</CountryInformationItem>
          <CountryInformationItem><span>Sub Region:</span>  {subregion}</CountryInformationItem>
          <CountryInformationItem><span>Capital:</span>  {capital}</CountryInformationItem>
        </div>
        <div>
          <CountryInformationItem><span>Top Level Domain:</span>  {topLevelDomain}</CountryInformationItem>
          <CountryInformationItem><span>Currencies:</span>  {currenciesString}</CountryInformationItem>
          <CountryInformationItem><span>Languages:</span>  {languagesString}</CountryInformationItem>
        </div>
      </CountryInformationWrapper>
      <CountryBordersWrapper>
        <CountryBordersTitle>Border Countries: </CountryBordersTitle>
        <CountryBordersInner>
        {
          borders && borders.length 
            ? borders.map((border, id) => <CountryBorder key={border + id} to={`/country/${border}`}>{border}</CountryBorder>) 
            : 'No border country'
        }
        </CountryBordersInner>
      </CountryBordersWrapper>
    </ContentWrapper>
  )
}
