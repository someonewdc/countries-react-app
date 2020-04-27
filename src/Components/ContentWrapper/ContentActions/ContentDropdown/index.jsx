import React, { useState } from 'react'
import { ArrowIcon } from '../../../ArrowIcon';
import { DropdownList } from './DropdownList';
import styled from 'styled-components'

const DropdownWrapper = styled.div`
  position: relative;
`

const StyledContentDropdown = styled.button`
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



export const ContentDropdown = () => {
  const [isListHidden, hideList] = useState(true)

  const dropdownBtnHandler = () => {
    hideList(!isListHidden)
  }

  return (
    <DropdownWrapper>
      <StyledContentDropdown onClick={dropdownBtnHandler}>
        Filter by Region
        <ArrowIcon 
          color={'#fff'}
          rotated={isListHidden}
        />
      </StyledContentDropdown>
      {
        !isListHidden && <DropdownList />
      }
    </DropdownWrapper>
    
  )
}
