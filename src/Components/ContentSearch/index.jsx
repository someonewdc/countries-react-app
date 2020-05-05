import React from 'react'
import { SearchIcon } from '../SearchIcon';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchText } from '../../store/main-page/actions'

const StyledContentSearch = styled.form`
  position: relative;
  display: flex;
  width: 480px;
  height: 55px;
  background: hsl(209, 23%, 22%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);;
  border-radius: 5px;
  overflow: hidden;
`

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`

const SearchInput = styled.input`
  background: inherit;
  border: 0;
  width: 85%;
  padding: 10px 10px 10px 5px;
  border-radius: 0 5px 5px 0;
  color: inherit;

  &::placeholder {
    color: inherit;
    font-size: 14px;
  }
`

export const ContentSearch = () => {

  const searchText = useSelector(({ mainPage }) => mainPage.searchText)
  const dispatch = useDispatch()

  return (
    <StyledContentSearch onSubmit={e => e.preventDefault()}>
      <SearchIconWrapper>
        <SearchIcon color={'#fff'}/>
      </SearchIconWrapper>
      <SearchInput 
        value={searchText}  
        onChange={e => dispatch(setSearchText(e.target.value))}
        type="text"
        placeholder="Search for a country..." 
      />
    </StyledContentSearch>
  )
}

