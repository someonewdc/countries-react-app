import React from 'react'
import styled, {StyledComponent} from 'styled-components'
import { Link } from 'react-router-dom';

const StyledNoMatch: StyledComponent<'div', any> = styled.div`
  height: calc(100vh - 80px);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  font-size: 20px;

  & span {
    font-size: 72px;
    font-weight: bold;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  margin-top: 20px;
  box-shadow: 0px 5px 15px -4px rgba(0,0,0,0.15);
  background: hsl(209, 23%, 22%);
  border-radius: 5px;
  padding: 10px;
`

export const NoMatch = (): JSX.Element => (
  <StyledNoMatch>
    <span>404</span>Page not found
    <StyledLink to="/">Main page</StyledLink>
  </StyledNoMatch>
)
