import React, { useState } from 'react'
import { ArrowIcon } from '../ArrowIcon';
import { DropdownList } from './DropdownList';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const DropdownWrapper = styled.div`
  position: relative;
`

const StyledHomeDropdown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 55px;
  padding: 20px;
  background: hsl(209, 23%, 22%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 0.3px;
`

export const HomeDropdown = () => {

  const [listHidden, toggleList] = useState(true)

  const dropdownBtnHandler = () => {
    toggleList(!listHidden)
  }

  const region = useSelector(({ mainPage }) => mainPage.region)

  return (
    <DropdownWrapper>
      <StyledHomeDropdown onClick={dropdownBtnHandler}>
        {region ? region : 'Filter by Region'}
        <ArrowIcon 
          color={'#fff'}
          rotated={listHidden}
        />
      </StyledHomeDropdown>
      {
        !listHidden && 
          <DropdownList 
            dropdownBtnHandler={dropdownBtnHandler}
          />
      }
    </DropdownWrapper>
    
  )
}
