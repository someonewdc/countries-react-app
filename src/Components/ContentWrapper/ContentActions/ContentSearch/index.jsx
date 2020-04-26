import React from 'react'
import { SearchIcon } from '../../../SearchIcon';
import styled from 'styled-components'

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

const SearchBtn = styled.button`
  width: 15%;
  cursor: pointer;
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
  return (
    <StyledContentSearch>
      <SearchBtn>
        <SearchIcon color={'#fff'}/>
      </SearchBtn>
      <SearchInput placeholder="Search for a country..."></SearchInput>
    </StyledContentSearch>
  )
}
