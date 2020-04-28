import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ContentItem } from './ContentItem';
import { Loader } from '../../Loader'
import axios from 'axios'

const StyledContentItemsWrapper = styled.ul`
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
  const [countries, setCountries] = useState([])

  const requestParams = ['name', 'capital', 'population' , 'flag', 'region']

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v2/',
        params: { fields: requestParams.join(';') }
      })
      const { data } = response
      setCountries(prevState => [...prevState, ...data])
    } catch(e) {
      console.log(e)
    }
  }

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
