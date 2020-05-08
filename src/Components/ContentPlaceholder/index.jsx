import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { requestCountries } from '../../store/main-page/actions';

const StyledPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 180px);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
  font-size: 30px;
`

export const ContentPlaceholder = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCountries())
  }, [dispatch])

  return (
  <StyledPlaceholder>
    Search country by name or region
  </StyledPlaceholder>
  )
}
