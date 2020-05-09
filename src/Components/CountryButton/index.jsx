import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BackArrowIcon } from '../BackArrowIcon';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 140px;
  height: 40px;
  background: hsl(209, 23%, 22%);
  box-shadow: inset 0px 4px 10px -4px rgba(0, 0, 0, 0.15);
  color: hsl(0, 0%, 100%);
  padding: 10px 40px 10px 30px;
  border-radius: 5px;
`

export const CountryButton = () => {
  return (
    <StyledLink to="/">
      <BackArrowIcon color={'hsl(0, 0%, 100%)'}/>
      Back
    </StyledLink>
  )
}
