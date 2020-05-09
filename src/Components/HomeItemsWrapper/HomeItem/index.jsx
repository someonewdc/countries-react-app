import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { formatPopulation } from '../../../utils/formatPopulation';

const StyledHomeItem = styled.li`
  width: 21%;
  height: 335px;
  margin-bottom: 50px;
  background: hsl(209, 23%, 22%);
  border-radius: 5px;
  box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &:not(:nth-child(4n)) {
    margin-right: 68px;
  }
`

const ItemImg = styled.img`
  object-fit: cover;
  height: 160px;
  width: 100%;
`

const ItemContent = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 160px);
  padding: 20px 25px 30px;
`

const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
`

const ItemDecription = styled.p`
  font-size: 14px;
  font-weight: 600;

  span {
    font-weight: 300;
  }

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`

export const HomeItem = ({ 
  population, 
  region, 
  capital, 
  name, 
  flag,
  alpha3Code }) => {
    
  return (
    <StyledHomeItem>
      <Link to={`/country/${alpha3Code}`}>
        <ItemImg src={flag} alt="hello"/>
        <ItemContent>
          <ItemTitle>{name}</ItemTitle>
          <div>
            <ItemDecription>
              Population: <span>{formatPopulation(population) !== '0' ? formatPopulation(population) : 'No information'}</span>
            </ItemDecription>
            <ItemDecription>
              Region: <span>{region || 'No information'}</span>
            </ItemDecription>
            <ItemDecription>
              Capital: <span>{capital || 'No information'}</span>
            </ItemDecription>
          </div>
        </ItemContent>
      </Link>
    </StyledHomeItem>
  )
}
