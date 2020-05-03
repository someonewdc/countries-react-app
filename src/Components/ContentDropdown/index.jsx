import React, { useState, useEffect } from 'react'
import { ArrowIcon } from '../ArrowIcon';
import { DropdownList } from './DropdownList';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { fetchCountriesAC } from '../../store/actionCreators';

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



export const ContentDropdown = ({ region, setRegion, setSearchText }) => {

  const [listHidden, toggleList] = useState(true)

  const dropdownBtnHandler = () => {
    toggleList(!listHidden)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (region) {
      dispatch(fetchCountriesAC('region', region))
    }
  }, [region, dispatch])

  return (
    <DropdownWrapper>
      <StyledContentDropdown onClick={dropdownBtnHandler}>
        {region ? region : 'Filter by Region' }
        <ArrowIcon 
          color={'#fff'}
          rotated={listHidden}
        />
      </StyledContentDropdown>
      {
        !listHidden && 
          <DropdownList 
            setRegion={setRegion} 
            setSearchText={setSearchText}
            dropdownBtnHandler={dropdownBtnHandler}
          />
      }
    </DropdownWrapper>
    
  )
}
