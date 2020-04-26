import React from 'react'
import { MoonIcon } from '../MoonIcon'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  background: hsl(209, 23%, 22%);
  color: hsl(0, 0%, 100%);
`

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const HeaderTitle = styled.h2`
  font-weight: 800;
  font-size: 18px;
  margin-right: auto;
`

const ThemeSwitcher = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  width: 105px;
  padding: 5px;
  background: inherit;

  font-size: 14px;
  color: inherit;

  cursor: pointer;
`


export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <HeaderContent>
          <HeaderTitle>Where in the world?</HeaderTitle>
          <ThemeSwitcher>
            <MoonIcon color={'hsl(0, 0%, 100%)'}/>
            {'Dark mode'}
          </ThemeSwitcher>
        </HeaderContent>
      </div>
    </StyledHeader>
  )
}