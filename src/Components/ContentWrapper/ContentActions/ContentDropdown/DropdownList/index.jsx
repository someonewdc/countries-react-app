import React from 'react'
import styled from 'styled-components'

const DropdownListWrapper = styled.ul`
  position: absolute;
  bottom: -170px;
  left: 0;
  width: 200px;
  height: 165px;
  border-radius: 5px;
  padding: 10px 0;
  background: hsl(209, 23%, 22%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`

const DropDownListItem = styled.li`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: hsl(207, 17%, 35%);
  }
`

export const DropdownList = () => {
  const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  return (
    <DropdownListWrapper>
      {
        continents.map((continent, index) => (
          <DropDownListItem
            key={`${continent}${index}`}
          >
            {continent}
          </DropDownListItem>
        ))
      }
    </DropdownListWrapper>
  )
}