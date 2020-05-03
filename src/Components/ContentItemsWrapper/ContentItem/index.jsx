import React from 'react'
import styled from 'styled-components'

const StyledContentItem = styled.li`
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

export const ContentItem = ({ 
  population, 
  region, 
  capital, 
  name, 
  flag }) => {

  const formatedPopulation = population => {
    const result = []
    const temp = population.toString().split('').reverse().join('').match(/\d{0,3}/g)
    temp.forEach((item, index) => index && index !== temp.length - 1 ? result.push(`,${item}`) : result.push(item))
    return result.join('').trim().split('').reverse().join('')
  }


  return (
    <StyledContentItem>
      <ItemImg src={flag} alt="hello"/>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <div>
          <ItemDecription>
            Population: <span>{formatedPopulation(population) !== '0' ? formatedPopulation(population) : 'No information'}</span>
          </ItemDecription>
          <ItemDecription>
            Region: <span>{region || 'No information'}</span>
          </ItemDecription>
          <ItemDecription>
            Capital: <span>{capital || 'No information'}</span>
          </ItemDecription>
        </div>
      </ItemContent>
    </StyledContentItem>
  )
}
