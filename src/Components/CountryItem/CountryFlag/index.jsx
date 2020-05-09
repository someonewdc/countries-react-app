import React from 'react'
import styled from 'styled-components'

const FlagImg = styled.img`
  object-fit: cover;
  max-height: 400px;
  max-width: 560px;
  box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.15);
`

const FlagWrapper = styled.div`
  height: 100%;
`

export const CountryFlag = ({flag}) => {
  return (
    <FlagWrapper>
      <FlagImg src={flag} alt="country-flag"/>
    </FlagWrapper>
  )
}
