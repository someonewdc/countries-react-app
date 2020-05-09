import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { requestCountries } from '../../store/main-page/actions';
import { Loader } from '../Loader';

const StyledPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 180px);
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
  font-size: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 180px);
`

export const HomePlaceholder = () => {

  const dispatch = useDispatch()

  const loading = useSelector(({ mainPage }) => mainPage.loading)

  useEffect(() => {
    dispatch(requestCountries())
  }, [dispatch])

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )
  }

  return (
  <StyledPlaceholder>
    Search country by name or region
  </StyledPlaceholder>
  )
}
