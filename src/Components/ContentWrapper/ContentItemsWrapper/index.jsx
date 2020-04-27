import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ContentItem } from './ContentItem';
import * as axios from 'axios'

const StyledContentItemsWrapper = styled.ul`
  padding-top: 45px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
`

export const ContentItemsWrapper = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
        const { data } = response
        setCountries([...countries, ...data])
      } catch(e) {
        console.log(e)
      }
    }
    getData()
    window.addEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  }

  return (
    <StyledContentItemsWrapper>
      {
        countries.map(({name, 
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
      {/* 
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem /> */}
    </StyledContentItemsWrapper>
  )
}
